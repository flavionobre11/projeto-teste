import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'


import loginComponent from './pages/Login/LoginComponent'
import homeComponent from './pages/Home/HomeComponent'
import SingUpComponent from './pages/SingUp/SingUpComponent'

Vue.use(VueRouter)

//criação de novo router com suas rotas
const router = new VueRouter({
  routes: [
    { path:'*', redirect: '/'},
    { path: '/', name:'login', component: loginComponent},
    { path: '/home', name:'home', component: homeComponent, meta: {requeresAuth: true}},
    { path: '/registrar', name:'registrar', component: SingUpComponent} 
  ]
});

//verificação se usuario está logado
//se estiver, redireciona para home. 
//se nao, redireciona para login.
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requeresAuth);

  if (requiresAuth && !currentUser) next('login'), alert("Por favor, realize login\npara acessar essa area.");
  else if (!requiresAuth && currentUser) next('home');
  else next();
})
  
  export default router;

