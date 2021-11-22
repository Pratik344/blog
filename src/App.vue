<template>
<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
<!-- <home/> -->
<!-- <ifElse/> -->
<!-- <forLoop/> -->
<!-- <passData/> -->
<!-- <reUse /> -->
<!-- <htmlBinding/> -->
<!-- <classBinding /> -->
<!-- <Props/> -->
<!-- <chaildToParent /> -->
<!-- <Ref/> -->
<!-- <simpleForm/> -->
<!-- <completeForm/>-->
<!-- <formModifier/> -->
<!-- <nonPropsData /> -->
<!-- <computedProperty/> -->
<!-- <Watchers/> -->
<!-- <Slots/> -->
<!-- <dynamicComponent/> -->
<!-- <teleportComponent/> -->
<!-- <router-link to="/" >Home</router-link> -->
<!-- <router-link to="/Watchers" >Watchers</router-link> -->
<!-- <router-view>

</router-view> -->
<callApi/>


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
// import Props from './components/Props.vue'
// import chaildToParent from './components/chaildToParent.vue'
// import Ref from './components/Ref.vue'
// import simpleForm from './components/simpleForm.vue'
// import completeForm from './components/completeForm.vue'
// import formModifier from './components/formModifier.vue'
// import nonPropsData from './components/nonPropsData.vue.vue'
// import computedProperty from './components/computedProperty.vue'
// import Watchers from './components/Watchers.vue'
// import Slots from './components/Slots.vue'
// import dynamicComponent from './components/dynamicComponent.vue'
// import teleportComponent from './components/teleportComponent.vue'
import callApi from './components/callApi.vue'
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
        // Props,
        // chaildToParent,
        // Ref,
        // simpleForm,
        // completeForm,
        // formModifier,
        // nonPropsData,
        // computedProperty,
        // Watchers,
        // Slots,
        // dynamicComponent,
        // teleportComponent,
        callApi,
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
