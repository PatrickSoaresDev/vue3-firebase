import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from '../components/login/Login.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.APP_VUE_BASEURL),
  routes,
})

const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })

router.beforeEach(async (to, from) => {
  const user = await getCurrentUser()
  console.log(user)
  if (to.meta.requiresAuth && !user) {
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router
