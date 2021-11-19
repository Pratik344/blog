<template>
<h1>For Loop Example</h1>
<ul>
    <li v-for="item in technology" :key="item">
        {{item}}
    </li>
</ul>
<br />
<br />
<ul>
    <li v-for="user in user" :key="user">
        Name is {{user.name}} and email is {{user.email}}
    </li>
</ul>
</template>

<script>
export default {
    name: "forLoop",
    data() {
        return {
            technology: ['Java', 'PHP', 'Python', 'React'],
            user: [{
                    name: "pratik",
                    email: "pratik@gmail.com"
                },
                {
                    name: "Jay",
                    email: "Jay@gmail.com"
                },
                {
                    name: "karan",
                    email: "karan@gmail.com"
                },
                {
                    name: "yash",
                    email: "yash@gmail.com"
                },

            ]
        }
    }
}
</script>
