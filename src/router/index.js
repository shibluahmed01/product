import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Cart from '../views/CartView.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router