<script setup>

import { ref } from 'vue';
import bcrypt from 'bcryptjs';

const username = ref("");
const password = ref("");
const userFound = ref(null);
const showMessage = ref(false);
    

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
        proceedFurther = false;
    }
    if (password.value === "" || password.value === " ") {
        passwordError.value = true;
        proceedFurther = false;
    }
    if (proceedFurther) {
        const result = await fetch("http://localhost:3001/users");
        const allData = await result.json();
        const foundData = allData.filter((data)=> data.username === username.value);
        foundData.map(async (data)=>{
            const comparisonResult = await bcrypt.compare(password.value,data.password);
            if(comparisonResult){
                userFound.value = data;
            }
        })
    }
    if(userFound.value){
        window.location.href="/dashboard";
    }
    else{
        showMessage.value = true;
    }
} 
</script>
<template>
    <form @submit="loginUser">
        <input type="text" placeholder="Username" @input="onUsernameEntered" :class="{'red-border':usernameError}"/><br />
        <input type="password" placeholder="Password" @input="onPasswordEntered" :class="{'red-border':passwordError}"/><br />
        <div v-if="showMessage">
            <h5 class="error-text"> Your username or password entered is not valid </h5>
        </div>
        <button type="submit"> Login </button>
    </form>
</template>