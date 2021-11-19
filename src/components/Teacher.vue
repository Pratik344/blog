<template>
    <h2>Teacher</h2>
    <h2>{{name}}</h2>

</template>

<script>
export default {
    name:"Teacher",
    // get data with props from props.vue
    props:{
        name:String,
    }
}
</script>