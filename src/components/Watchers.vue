<template>
    <h1>Watchers</h1>
    <h2>{{count}}</h2>
    <button v-on:click="count=count+1">+</button>
    <button v-on:click="count=count-1">-</button>
    <!-- <h3>{{route.params}}</h3> -->

</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name:"Watchers",
    mounted(){
        const route=useRoute();
        console.log('route: ', route.params);
        
    },
    data(){
        return{
        count:0,
        }
    },
    watch:{
        count(val,prev){
            // alert("Counter Change")
             if(val>5 && val>prev)
             {
                 this.count=0
             }

        }
    }
}
</script>