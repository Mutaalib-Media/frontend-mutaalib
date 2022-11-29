import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MySpace from '../views/Profile/MySpace.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myspace',
    name: 'Profile',
    component: MySpace
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
