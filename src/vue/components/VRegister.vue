<script setup>
import { ref } from 'vue';
import bcrypt from 'bcryptjs';

const username = ref('');
const password = ref('');
const rePassword = ref('');
const rollNumber = ref('');
const loading = ref(false);

const usernameError = ref(false);
const passwordError = ref(false);
const repasswordError = ref(false);
const rollNumberError = ref(false);

// Update the value as the user types
const changeUsername = (e) => {
    username.value = e.target.value;
    usernameError.value = false;
};

const changePassword = (e) => {
    password.value = e.target.value;
    passwordError.value = false;
};

const changeRePassword = (e) => {
    rePassword.value = e.target.value;
    repasswordError.value = false;
};

const changeRollNumber = (e) => {
    rollNumber.value = e.target.value;
    rollNumberError.value = false;
};

const onFormSubmission = async (e) => {
    e.preventDefault();

    let hashedPassword = null;

    let toProceedFurther = true;
    if (username.value === '' || username.value === ' ') {
        usernameError.value = true;
        toProceedFurther = false;
    }
    if (password.value === '' || password.value === ' ') {
        passwordError.value = true;
        toProceedFurther = false;
    }
    if (rePassword.value === '' || rePassword.value === ' ') {
        repasswordError.value = true;
        toProceedFurther = false;

    }
    if (rollNumber.value === '' || rollNumber.value === ' ') {
        rollNumberError.value = true;
        toProceedFurther = false;
    }
    if (password.value !== rePassword.value) {
        repasswordError.value = true;
        passwordError.value = true;
        toProceedFurther = false;
    }
    if (toProceedFurther) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password.value, salt);

        const body = {
            "username": username.value,
            "password": hashedPassword,
            "rollNumber": rollNumber.value
        }
        loading.value = true;
        const response = await fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (response.status === 201) {
            sessionStorage.setItem("username", username.value);
            sessionStorage.setItem("password", hashedPassword);
            window.location.href = "/dashboard";
        }
    }
};
</script>

<template>
    <form class="register-form" @submit="onFormSubmission">
        <input type="text" placeholder="Username" @input="changeUsername" autocomplete="username"
            :class="{ 'red-border': usernameError }" /><br />
        <input type="password" placeholder="Password" @input="changePassword" autocomplete="new-password"
            :class="{ 'red-border': passwordError }" /><br />
        <input type="password" placeholder="Re-enter password" @input="changeRePassword" autocomplete="new-password"
            :class="{ 'red-border': repasswordError }" /><br />
        <input type="number" placeholder="Enter your roll number" @input="changeRollNumber"
            :class="{ 'red-border': rollNumberError }" /><br />

        <div v-if="loading">
            <button class="disabled-button"> Registering you... </button>
        </div>
        <div v-else>
            <button type="submit"> Register </button>
        </div>
    </form>
</template>

<style>


.register-form input {
    margin-bottom: 10px;
    height: 25px;
}
</style>
