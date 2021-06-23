import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../views/Main.vue";
import  halloworld  from "../components/halloworld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: "Main",
    component : () => import ("../views/Main.vue")
    
  },
  {
    path: '/halloworld',
    name: "Halloworld",
    component : () => import ("../components/Halloworld.vue")
    
  }
  
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
