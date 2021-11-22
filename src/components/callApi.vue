<template>
<h1>Call API</h1>
<p v-for="item in list" :key="item">
    {{item.id}}
    {{item.email}}
    {{item.first_name}}
    {{item.last_name}}
   <img :src="item.avatar" /> 

</p>
</template>

<script>
import axios from 'axios'
export default {
    name: "callApi",
    data() {
        return {
            list: [],
        }
    },
    async mounted() {
        let result=await axios.get("https://reqres.in/api/users?page=1");
        console.warn(result.data.data);
        this.list=result.data.data
    },
}
</script>
