import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/services/:service',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    props: true
  },
  {
    path: '/news-events',
    name: 'NewsEvents',
    component: () => import('../views/NewsEvents.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404Page.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
