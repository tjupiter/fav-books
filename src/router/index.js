import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Parralax2 from '../views/Parralax2.vue'
import NotFound from '../views/NotFound.vue'
import SingleBook from '../components/SingleBook.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/parralax2',
    name: 'Parralax2',
    component: Parralax2
  },
  { 
    path: '/books/:slug', 
    name: 'SingleBook', 
    component: SingleBook,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes,
  scrollBehavior() {
      return { x: 0, y: 0 }
    }
})

export default router
