<template>
<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
<!-- <home/> -->
<!-- <ifElse/> -->
<!-- <forLoop/> -->
<!-- <passData/> -->
<!-- <reUse /> -->
<!-- <htmlBinding/> -->
<!-- <classBinding /> -->
<Props/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import ifElse from './components/ifElse.vue'
// import forLoop from './components/forLoop.vue'
// import passData from './components/passData.vue'
// import reUse from './components/reUse.vue'
// import htmlBinding from './components/htmlBinding.vue'
// import classBinding from './components/classBinding.vue'
import Props from './components/Props.vue'
export default {
    name: 'App',
    components: {
        // HelloWorld,
        // Home,
        // ifElse,
        // forLoop,
        // passData,
        // reUse,
        // htmlBinding,
        // classBinding,
        Props,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
