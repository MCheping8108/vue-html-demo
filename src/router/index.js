import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    // {path: '/inputer', name: 'inputer', component: () => import('../views/inputer.vue')},
    {path: '/onclick', name: 'onclick', component: () => import('../views/onclick.vue')},
    {path: '/button', name: 'element', component: () => import('../views/button.vue')},
    {path: '/bulr-login', name: 'bulr-login', component: () => import('../views/Bulr-Login.vue')},
    {path: '/iframe', name: 'iframe', component: () => import('../views/iframe.vue')},
    {path: '/border-radius', name: 'border-radius', component: () => import('../views/border-radius.vue')},
    {path: '/img', name: 'img', component: () => import('../views/img.vue')},
  ]
})

export default router
