<template>
    <!-- get data from the parent function #passData -->
    <h2>chaild Component {{name}}</h2>
    <h2>{{user.name}}</h2>
    <h2> {{user.email}}</h2>
    <button type="button" v-on:click="getData()">Call Function</button>



</template>
<script>
export default {
    name:"Chaild",

    props:{
        name:String,
        user:Object,
        getData:Function,
    },
   
}
</script>