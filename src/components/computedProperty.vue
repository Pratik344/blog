<template>
<h1>Computed Property</h1>

<h2>{{getPrice}}</h2>
</template>

<script>
export default {
    name: "computedProperty",
    data() {
        return {
            dollor: 100,
            ruppesval: 70,
            discount: 10,
        }
    },
    computed: {
        getPrice() {
            return (this.dollor * this.ruppesval) - this.discount
        }
    }
}
</script>
