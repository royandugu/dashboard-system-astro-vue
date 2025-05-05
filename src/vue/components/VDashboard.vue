<script setup>
import { ref } from 'vue';

const allUsers = ref([]);
const popUpToShow = ref(false);
const isLoading = ref(false);

const fetchAllUsers = async () => {
  const response = await fetch("http://localhost:3001/users");
  const jsonFormat = await response.json();
  allUsers.value = jsonFormat;
}

const showPopup = () => {
  popUpToShow.value = true;
}
const hidePopup = () => {
  popUpToShow.value = false;
}

const deleteUser = async (id) =>{
  const response = await fetch(`http://localhost:3001/users/${id}`,{
    method:"DELETE"
  });
  
}

fetchAllUsers();
</script>
<template>
  <div>
    <h1>Welcome to dashboard -- The list of users are : </h1>
    <ul>
      <li class="indv-user-space" v-for="(user, index) in allUsers" :key="index">
        <p> Name : {{ user.username }} </p>
        <p> Rollnumber : {{ user.rollNumber }} </p>
        <button @click="showPopup"> Delete user </button>
      </li>
    </ul>
  </div>

  <div v-if="popUpToShow" class="pop-up-wrapper">
    <h5> Do you really want to delete this user ? </h5>
    <div class="pop-up-btn-container">
      <button> Yes </button>
      <button @click="hidePopup"> No </button>
    </div>
  </div>

  <div class="overlay" v-if="popUpToShow" @click="hidePopup">

  </div>
</template>
<style>
.overlay{
  background:rgba(0,0,0,.6);
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index: 2;
}
.indv-user-space {
  margin-bottom: 30px;
}

button {
  cursor: pointer;
}
.pop-up-wrapper{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border:1px solid black;
  padding:20px;
  border-radius:10px;
  z-index: 3;
  background:#fff;
}
.pop-up-btn-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>