import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
Vue.use(VueRouter)

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const checkHasAuth = (to: any, from: any, next: any) => {
  if (store.getters['auth/auth']) {
    next()
  } else {
    next('/login')
  }
}
const routes: Array<RouteConfig> = [
  {
    path: '/login' || '/',
    name: 'Login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: checkHasAuth
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: checkHasAuth
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
