import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from "@/modules/shared/components/NavBar.vue";

import naruto from '../modules/naruto/router';
import dbz from '../modules/dbz/router';
import pokemon from '../modules/pokemon/router';

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: NavBar
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    
    {
      path: '/naruto',
      ...naruto
    },
    {
      path: '/dbz',
      ...dbz
    },
    {
      path: '/pokemon',
      ...pokemon
    },
    { 
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/components/NavBar.vue')
    },
  ]
})

export default router
