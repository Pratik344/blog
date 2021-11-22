<template>
    <!-- send data to the chaildTOParent Component #chaildToParent.vue -->
    <h1>Chaild Component Data</h1>
    <button v-on:click="getUser(userName)">Send User Name</button>
</template>

<script>
export default {
    name:"chaildData",
    data(){
        return{
            userName:"Pratik",
        }
    },
    props:{
        getUser:Function
    }
}
</script>