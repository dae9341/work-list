/* eslint-disable */
import { initializeApp } from 'firebase/app';
import Vue from 'vue';
import App from './App.vue';
import '@/assets/scss/common.scss'

const firebaseConfig = {
  apiKey: "AIzaSyDcsIRnfoshTi0ekIlRcCwLCRbLijalgas",
  authDomain: "todolist-e8b0d.firebaseapp.com",
  databaseURL: "https://todolist-e8b0d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-e8b0d",
  storageBucket: "todolist-e8b0d.appspot.com",
  messagingSenderId: "610067574429",
  appId: "1:610067574429:web:646102d20c1d54c3f76e74",
  measurementId: "G-C995XJXW05"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
