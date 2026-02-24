import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView,
        },
        {
            path: '/teams',
            name: 'teams',
            component: () => import('../views/TeamsListView.vue'),
        },
        {
            path: '/teams/:id',
            name: 'team-detail',
            component: () => import('../views/TeamDetailView.vue'),
            props: true,
        },
        {
            path: '/games/:id',
            name: 'game-detail',
            component: () => import('../views/GameDetailView.vue'),
            props: true,
        },
        {
            path: '/players',
            name: 'players',
            component: () => import('../views/PlayersView.vue'),
        },
        {
            path: '/history',
            name: 'history',
            component: () => import('../views/HistoryView.vue'),
        },
    ],
})

export default router
