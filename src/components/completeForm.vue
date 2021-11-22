<template>
<h1>Form</h1>
<!-- <p>{{form}}</p> -->
<ul>
    <li v-for="formField in error" v-bind:key="formField">
        {{formField}} not valid

    </li>
</ul>
<form>
    <label>Email </label>
    <input type="text" placeholder="Enter Email" v-model="form.email" />
    <br />
    <br />
    <label>Password </label>
    <input type="password" placeholder="Enter Password" v-model="form.password" />
    <br />
    <br />
    <label>Country </label>
    <select v-model="form.country">
        <option>India</option>
        <option>USA</option>
        <option>UK</option>

    </select>
    <br />
    <br />
    <h3>Technology</h3>
    <label>Java </label>
    <input type="checkbox" value="Java" v-model="form.technology" />
    <br />
    <br />
    <label>React </label>
    <input type="checkbox" value="React" v-model="form.technology" />

    <br />
    <br />
    <h3>Gender</h3>
    <label>Male </label>
    <input type="radio" value="Male" v-model="form.gender" />
    <br />
    <br />
    <label>Female </label>
    <input type="radio" value="Female" v-model="form.gender" />

    <br />
    <br />

    <button type="button" v-on:click="login()">Login</button>
</form>
</template>

<script>
export default {
    name: "completeForm",
    data() {
        return {
            form: {
                email: "",
                password: "",
                country: "",
                technology: [],
                gender: "",
            },
            error: [],
        }
    },
    methods: {
        login() {
            this.error = [];
            for (const formField in this.form) {
                if (this.form[formField] === "" || this.form[formField].length === 0) {
                    this.error.push(formField)
                }
            }
            if (this.error.length === 0) {
                alert("Data submited")
            }
            console.warn(this.form, this.error)
        }
    }
}
</script>
