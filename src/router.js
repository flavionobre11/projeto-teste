import Vue from 'vue'
import VueRouter from 'vue-router'

import loginComponent from './pages/Login/LoginComponent'
import homeComponent from './pages/Home/HomeComponent'
import SingUpComponent from './pages/SingUp/SingUpComponent'

Vue.use(VueRouter)

const routes = [
    { path:'*', redirect: '/'},
    { path: '/', name:'login', component: loginComponent },
    { path: '/home', name:'home', component: homeComponent },
    { path: '/registrar', name:'registrar', component: SingUpComponent} 
  ]
  
  export default new VueRouter({
    routes // short for `routes: routes`
  });

