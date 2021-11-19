<template>
    <h2>Student</h2>
    <h2>{{name}}</h2>

</template>

<script>
export default {
    name:"Student",
    // get data with props from props.vue
    props:{
        name:String,
    }
}
</script>