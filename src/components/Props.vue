<template>
<h1>Props</h1>
<!-- send data to student component -->
<Student :name="name"/> 
<!-- send data to teacher component -->
<Teacher name="rahul" />
</template>

<script>
import Student from './Student.vue'
import Teacher from './Teacher.vue'
export default {
    name: "Props",
    data(){
        return{
            name:"rahul"
        }
    },
    components: {
        Student,
        Teacher,
    }
}
</script>
