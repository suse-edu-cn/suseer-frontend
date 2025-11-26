import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/portal', component: () => import('@/views/PortalView.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
