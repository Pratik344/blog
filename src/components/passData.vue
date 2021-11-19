<template>
<!-- pass Data to child components #chaild-->
<h1>Pass Data To Child Component</h1>
<Chaild name="pratik" :user="user" :getData="getData" />
</template>

<script>
import Chaild from './Chaild.vue'
export default {
    name: "passData",
    components: {
        Chaild,
    },
    data() {
        return {
            user: {
                name: "karan",
                email: "karan@gmail.com"
            }
        }
    },
    methods: {
        getData() {
            console.warn("parent function called")
            alert("helo")
        }
    }
}
</script>
