<script setup>
import {createPinia} from 'pinia';
import {provide} from 'vue';
const pinia = createPinia()
provide('pinia', pinia)
</script>

<template>
    <slot />
</template>

<style>
.error-text{
    color:red;
}
input.red-border {
    border-color: red;
}
.disabled-button {
    pointer-events: none;
    opacity: .5;
}
</style>