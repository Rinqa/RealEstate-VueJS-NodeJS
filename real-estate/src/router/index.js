import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BootstrapVue from './router'
import 'bootstrap/dist/css/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router