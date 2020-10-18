import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ZiWeiBoard from '../views/ZiWeiBoard.vue'
import GetZiWeiBoard from '../views/GetZiWeiBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ziweiboard',
    name: 'ZiWeiBoard',
    component: ZiWeiBoard
  },
  {
    path: '/getziweiboard',
    name: 'GetZiWeiBoard',
    component: GetZiWeiBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
