import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/order',
    component: () => import ('../views/OrderPage.vue')
  },
  {
    path: '/order/:id',
    component: () => import('../views/SelectedItem.vue')
  },
  {
    path: '/checkout',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/orderSucess',
    component: () => import('../views/OrderReceived.vue')
  },
  {
    path: '/loyaltyPoints',
    component: () => import('../views/loyaltyPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
