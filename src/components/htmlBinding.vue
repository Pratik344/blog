<template>
<h1>{{text}}</h1>
<div v-html="tag"/>


</template>

<script>
export default {
    name: "htmlBinding",
    data() {
        return {
            text: "Pratik Raval",
            tag:"<h1>Pratik </h1>"
        }
    },
}
</script>
