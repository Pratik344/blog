<template>
<!-- Recive Data From the chaildData #chaildData.vue -->
<h1>Send Data to Chaild Component To Parent Components</h1>
<chaildData :getUser="getUserName" />
<h2>{{chaildUser}}</h2>
</template>

<script>
import chaildData from './chaildData.vue'
export default {
    name: "ChaildToParent",
    components: {
        chaildData,
    },
    methods: {
        getUserName(name) {
            this.chaildUser = name
        }
    },
    data() {
        return {
            chaildUser: ""
        }
    }
}
</script>
