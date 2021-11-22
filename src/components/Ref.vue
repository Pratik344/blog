<template>
    <h1>Ref Component</h1>
    <input type="text" ref="input"/>
    <button v-on:click="getData()">Click Me</button>
</template>

<script>
export default {
    name:"Ref",
    methods:{
        getData(){
            // console.warn("Hello")
            this.$refs.input.focus();
            let val=this.$refs.input.value;
            console.warn(val)
        }
    }
}
</script>