import AboutPage from '@/views/AboutPage.vue'
import HomePage from '@/views/HomePage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: HomePage },
    { name: 'about', path: '/about', component: AboutPage },
    { name: 'products', path: '/products', component: ProductsPage },
  ],
})

export default router
