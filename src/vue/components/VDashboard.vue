<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const isLoading = ref(true);
const validUser = ref(false);


watch([isLoading, validUser],([loading, auth]) => {
    if (!loading && !auth) {
        const router = useRouter();
        router.push("/login"); 
    }
});

</script>

<template>
  <div v-if="isLoading">
    <h1>Loading ...</h1>
  </div>
  <div v-else>
    <h1 v-if="validUser">Welcome to dashboard</h1>
  </div>
</template>
