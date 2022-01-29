import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


export const routes: Array<RouteRecordRaw> = [
  {
    name:'Index',
    path:'/',
    component:() => import('@/views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
