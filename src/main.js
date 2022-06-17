/* eslint-disable */
import Vue from 'vue';
import {router} from './routes/index.js'
import App from './App.vue';
import '@/assets/scss/common.scss'


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
