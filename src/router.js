import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import UserAction from './views/UserAction.vue'

// Defines the routes and components to render
const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
     {
        path: '/register',
        name: "UserAction",
        component: UserAction
    } 
]
// creates history so that the user can use the back button to navigate
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router; 