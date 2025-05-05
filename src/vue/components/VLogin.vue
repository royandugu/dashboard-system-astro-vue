<script setup>
import { ref } from 'vue';

const username = ref("");
const password = ref("");

const usernameError = ref(false);
const passwordError = ref(false);

const onUsernameEntered = (e) => {
    username.value = e.target.value;
}
const onPasswordEntered = (e) => {
    password.value = e.target.value;
}

const loginUser = async (e) => {
    e.preventDefault();
    let proceedFurther = true;
    if (username.value === "" || username.value === " ") {
        usernameError.value = true;
        passwordError = false;
    }
    if (password.value === "" || password.value === " ") {
        passwordError.value = true;
        proceedFurther = false;
    }
    if (proceedFurther) {
        const result = await fetch("http://localhost:3001/users");
        const allData = await result.json();
    }
} 
</script>
<template>
    <form @submit="loginUser">
        <input type="text" placeholder="Username" @input="onUsernameEntered" :class="{'red-border':usernameError}"/><br />
        <input type="password" placeholder="Password" @input="onPasswordEntered" :class="{'red-border':passwordError}"/><br />
        <button type="submit"> Login </button>
    </form>
</template>