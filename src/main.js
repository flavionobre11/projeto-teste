import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import loginComponent from './pages/Login/LoginComponent'
import homeComponent from './pages/Home/HomeComponent'
 

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name:'login', component: loginComponent },
  { path: '/home', name:'home', component: homeComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
