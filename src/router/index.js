import {createRouter, createWebHistory} from "vue-router"

import About from "@/views/About.vue"
import Dmytro from "@/views/Dmytro.vue"
import Petro from "@/views/Petro.vue" 
import Kitty from "@/views/Kitty.vue"

 const routes = [
    {path: "/", name: "about", component: About },
    {path: "/dmytro", name: "Dmytro", component: Dmytro },
    {path: "/petro", name: "Petro", component: Petro},
    {path: "/kitty", name: Kitty, component: Kitty},
 ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
