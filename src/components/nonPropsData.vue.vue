<template>
<!-- Send Data without props to Data components #Data.vue -->
<h1>Non-Props Data</h1>
<Data id="user-id"/>
</template>

<script>
import Data from './Data.vue'
export default {
    name: "nonPropsData",
    components:{
        Data,
    },
}
</script>
