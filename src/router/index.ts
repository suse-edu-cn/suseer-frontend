import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: () => import('@/views/LoginView.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
