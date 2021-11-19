<template>
<!-- use in the reUse component #reUse.vue -->
<div class="user">
    <h2>{{data.name}}</h2>
    <h2>{{data.email}}</h2>
    <button v-on:click="getUsers(data.name)">Alret Name</button>
</div>
</template>

<script>
export default {

    name: "User",
    props: {
        data: Object,
        getUsers: Function,
    },

}
</script>

<style scoped>
.user {
    background-color: aqua;
    padding: 10px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>
