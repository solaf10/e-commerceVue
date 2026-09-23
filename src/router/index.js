import AboutPage from '@/views/AboutPage.vue'
import HomePage from '@/views/HomePage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
      meta: {
        title: 'Home',
      },
    },
    {
      name: 'about',
      path: '/about',
      component: AboutPage,
      meta: {
        title: 'About',
      },
    },
    {
      name: 'products',
      path: '/products',
      component: ProductsPage,
      meta: {
        title: 'Products',
      },
    },
    {
      name: 'product',
      path: '/products/:id',
      component: SingleProduct,
    },
  ],
})

router.beforeEach((to) => {
  if (to.name === 'product') document.title = 'Comfy- ' + to.query.title
  else document.title = 'Comfy- ' + to.meta.title
})

export default router
