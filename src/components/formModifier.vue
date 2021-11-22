<template>
<h1>Form Modifier</h1>
<input type="number" v-model.number.lazy="data" />
<h2>Data is :{{ typeof(data)}}</h2>
</template>

<script>
export default {
    name: "formModifier",
    data() {
        return {
            data: '',
        }
    }
}
</script>
