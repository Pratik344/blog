<template>
<!-- re use the component #user -->
<h1>Re Use components</h1>
<ul>
    <li v-for="user in users" :key="user.name">
        <User :data="user" :getUsers="getUsers" />
    </li>
</ul>
</template>

<script>
import User from './User.vue'
export default {
    name: "reUse",

    components: {
        User
    },
    methods: {
        getUsers(name) {
            console.log('name: ', name);
            alert(name)
        }
    },
    data() {
        return {
            users: [{
                    name: 'Pratik',
                    email: 'pratik@gmail.com'
                },
                {
                    name: 'karan',
                    email: 'karan@gmail.com'
                },

                {
                    name: 'heet',
                    email: 'heet@gmail.com'
                },

                {
                    name: 'jay',
                    email: 'jay@gmail.com'
                },

            ]
        }
    },
}
</script>
