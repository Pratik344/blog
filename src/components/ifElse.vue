<template>
<h1 v-if="show">If Else Condition</h1>
<h1 v-else> Else Condition</h1>
<button type="button" v-on:click="show=!show">Show</button>
</template>

<script>
export default {
    name: "ifElse",
    data() {
        return {
            show: true
        }
    },
}
</script>
