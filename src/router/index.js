import {createRouter, createWebHistory} from "vue-router"

import About from "@/views/About.vue"
import Dmytro from "@/views/Dmytro.vue"
import Petro from "@/views/Petro.vue" 

 const routes = [
    {path: "/", name: "about", component: About },
    {path: "/dmytro", name: "Dmytro", component: Dmytro },
    {path: "/petro", name: "Petro", component: Petro}
 ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
