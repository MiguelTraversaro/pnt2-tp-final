import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"

export const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home},
        { path: "/login", component: Login},
        { path: "/register", component: Register},
    ]
})
