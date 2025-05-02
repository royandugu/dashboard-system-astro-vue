import { defineStore } from "pinia";
export const useUserInformation = defineStore('user-info',{
    state: ()=>{
        return {
            userName:'',
            rollNumber:''
        }
    },
    actions:{
        assignUserName(value){
            this.userName = value;
        },
        assignRollNumber(value){
            this.rollNumber = value;
        }
    }
})