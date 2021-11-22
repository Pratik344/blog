<template>
<h1>Slots</h1>
<chaildSlots>
    <template v-slot:header>
        <h1>Code with Pratik</h1>
    </template>
    <template v-slot:main>
        <p>A Vue js product</p>

    </template>
    <template v-slot:footer>
    <button>Buy Now</button>
        

    </template>

</chaildSlots>
</template>

<script>
import chaildSlots from './chaildSlots.vue'
export default {
    name: "Slots",
    components: {
        chaildSlots,
    }
}
</script>
