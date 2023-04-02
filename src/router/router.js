import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import E404 from "@/views/E404.vue";
import Weather from "@/views/Weather.vue";
import Crypto from "@/views/Crypto.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/about-me/:lang",
        name: "about",
        component: About
    },
    {
        path: "/weather",
        name: "weather",
        component: Weather
    },
    {
        path: "/crypto",
        name: "crypto",
        component: Crypto
    },

    // redirects
    {
        path: "/about-me",
        redirect: "/about-me/en"
    },
    {
        path: "/about",
        redirect: "/about-me"
    },

    // error 404
    {
        path: "/:catchAll(.*)",
        name: "E404",
        component: E404
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
