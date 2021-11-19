<template>
<h1>Class Binding</h1>
<h2 :class="applyStyle">Class Component</h2>
<button v-on:click="colorfull=!colorfull">Apply style</button>
</template>

<script>
export default {
    name: "classBinding",
    data() {
        return {
            colorfull: false,
        }
    },
    computed: {
        applyStyle() {
            return {

                green: this.colorfull,
                err: true,
                other: false,

            }
        },
    }
}
</script>

<style scoped>
.green {
    background-color: green;
    widows: 20px;
    padding: 10px;

}

.err {
    color: red;
}

.other {
    font-size: 50px;
}
</style>
