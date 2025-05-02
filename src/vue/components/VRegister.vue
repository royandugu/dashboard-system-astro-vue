<script setup>
    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');
    const rePassword = ref('');
    const rollNumber = ref('');

    // Update the value as the user types
    const changeUsername = (e) => {
        username.value = e.target.value;
        console.log("user name is changing");
    };

    const changePassword = (e) => {
        password.value = e.target.value;
        console.log("password is changing");
    };

    const changeRePassword = (e) => {
        rePassword.value = e.target.value;
        console.log("re-password is changing");
    };

    const changeRollNumber = (e) => {
        rollNumber.value = e.target.value;
        console.log("roll number is changing");
    };

    // Handle form submission
    const onFormSubmission = (e) => {
        e.preventDefault();  
        console.log("Form is submitting");
        console.log("Username:", username.value);
        console.log("Password:", password.value);
        console.log("Roll Number:", rollNumber.value);
    };
</script>

<template>
    <form @submit="onFormSubmission">
        <input
            type="text"
            placeholder="Username"
            @input="changeUsername"
            autocomplete="username"
        /><br />
        <input
            type="password"
            placeholder="Password"
            @input="changePassword"
            autocomplete="new-password"
        /><br />
        <input
            type="password"
            placeholder="Re-enter password"
            @input="changeRePassword"
            autocomplete="new-password"
        /><br />
        <input
            type="number"
            placeholder="Enter your roll number"
            @input="changeRollNumber"
        /><br />
        <button type="submit"> Register </button>
    </form>
</template>
