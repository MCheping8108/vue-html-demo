import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/test', name: 'test', component: () => import('../views/test.vue')},
    {path: '/inputer', name: 'inputer', component: () => import('../views/inputer.vue')},
    {path: '/onclick', name: 'onclick', component: () => import('../views/onclick.vue')},
    {path: '/time', name: 'time', component: () => import('../views/time.vue')},
  ]
})

export default router
