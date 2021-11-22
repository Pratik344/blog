<template>
    <!-- <h1>Teleport Component</h1> -->
    <teleport to="#header">
        <Header/>
    </teleport>
</template>
<script>
import Header from './Header.vue'
export default {
    name:"teleportComponent",
    components:{
        Header,
    }

}
</script>