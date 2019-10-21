import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserView from '../views/UserView.vue'
import IdeaView from '../views/IdeaView.vue'
import ProjectView from '../views/ProjectView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile/:id?',
    name: 'user',
    component: UserView
  },
  {
    path: '/idea/:id',
    name: 'idea',
    component: IdeaView
  },
  {
    path: '/project/:id',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
