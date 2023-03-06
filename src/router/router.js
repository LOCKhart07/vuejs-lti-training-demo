import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Insult from '../views/Insult.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/insult/", name: "Insult", component: Insult },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})