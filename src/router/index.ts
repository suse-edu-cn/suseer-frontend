import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },

    // 个人页面相关
    { path: '/portal', component: () => import('@/views/PortalView.vue') },
    { path: '/user', component: () => import('@/views/UserView.vue') },

    // 比赛相关
    { path: '/match', component: () => import('@/views/MatchListView.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
