import { createWebHistory,createRouter } from "vue-router";
import Home from './components/Home.vue'
import Watchers from './components/Watchers.vue'

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Watchers',
        path:'/Watchers/:id',
        component:Watchers
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router