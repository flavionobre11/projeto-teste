import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app"


Vue.config.productionTip = false

// area relacionada ao firebase
// utilizado para sistema de autenticação
var firebaseConfig = {
  apiKey: "AIzaSyACt3qMYBRdNwlh2F9bWseLGEkwKowqSZo",
  authDomain: "vue-auth-36d4a.firebaseapp.com",
  databaseURL: "https://vue-auth-36d4a.firebaseio.com",
  projectId: "vue-auth-36d4a",
  storageBucket: "vue-auth-36d4a.appspot.com",
  messagingSenderId: "1022551431573",
  appId: "1:1022551431573:web:a014dc2a427beca2dfbe9c"
};

// iniciando firebase
firebase.initializeApp(firebaseConfig);



// injetando configurações
let app = ''
firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
        router,
        render: h => h(App),
      }).$mount('#app');
  }
})

