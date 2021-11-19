<template>
<!-- <h1 v-on:mousemove="getConsole()">Home Componants</h1> -->
<h1>Two Way Binding with checkbox & radio button</h1>
<!-- <button v-on:click="testData()">Click Me</button>
<button v-on:dblclick="testData('Button double Clicked')">Click Me</button> -->
<!-- <input type="text" placeholder="Enrer Email" v-model="email" />
<br/>
<br/>
<input type="password" placeholder="Enter Password" v-model="password">
<br/>
<br/>
<button type="button" v-on:click="getData()">Submit</button> -->
<h3>Technologies</h3>
<label for="Java">Java</label>
<input type="checkbox" value="Java" id="Java" v-model="technology">
<br />
<br />
<label for="Python">Python</label>
<input type="checkbox" value="Python" id="Python" v-model="technology">
<br />
<br />
<label for="PHP">PHP</label>
<input type="checkbox" value="PHP" id="PHP" v-model="technology">
<h4>Selected technology{{technology}}</h4>
<br />
<br />
<h3>Gender</h3>
<label for="Male">Male</label>
<input type="radio" value="Male" id="Male" name="Gender" v-model="gender">
<label for="FeMale">FeMale</label>
<input type="radio" value="FeMale" id="FeMale" name="Gender" v-model="gender">
<label for="Other">Other</label>
<input type="radio" value="Other" id="Other" name="Gender" v-model="gender">
<h4>Selected Gender  {{gender}}</h4>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            // email:null,
            // password:null,
            technology: [],
            gender:null,
        }
    },
    // methods:{
    //     getData(){
    //         console.warn("Values",this.email,this.password)
    //     }
    // }
    // getName() {
    //         return "Pratik raval"
    //     },
    //     getData() {
    //         return {
    //             name: "Pratik",
    //             email: this.email

    //         }
    //     },
    //     testData() {
    //         this.count = this.count + 1
    //     },
    //     getConsole() {
    //         console.log("Movese Move called")
    //     }
}
</script>
