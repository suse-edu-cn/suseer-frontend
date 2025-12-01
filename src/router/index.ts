import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },

    // 个人页面相关
    { path: '/auth', component: () => import('@/views/AuthView.vue') },
    {
        path: '/user',
        component: () => import('@/views/UserView.vue'),
        meta: { requiresAuth: true },
    },

    // 比赛相关
    { path: '/match', component: () => import('@/views/MatchListView.vue') },
    { path: '/match/:id', component: () => import('@/views/MatchDetailView.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
