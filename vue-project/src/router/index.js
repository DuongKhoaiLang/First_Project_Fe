import { createRouter, createWebHistory } from 'vue-router'

// import các component
import Home from '../App.vue'
import About from '../Test.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: About }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
