<template>
<h1>Simple Form</h1>
<p>{{form}}</p>
<form>
    <label>Email </label>
    <input type="text" placeholder="Enter Email" v-model="form.email" />
    <br />
    <br />
    <label>Password </label>
    <input type="password" placeholder="Enter Password" v-model="form.password" />
    <br />
    <br />
    <button type="button" v-on:click="login()">Login</button>
</form>
</template>

<script>
export default {
    name: "simpleForm",
    data() {
        return {
            form: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
        login() {
            console.warn("login Data", this.form)
        }
    }
}
</script>
