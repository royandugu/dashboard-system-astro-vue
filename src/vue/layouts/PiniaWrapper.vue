<script setup>
import {createPinia} from 'pinia';
import {provide} from 'vue';
const pinia = createPinia()
provide('pinia', pinia)
</script>

<template>
    <slot />
</template>