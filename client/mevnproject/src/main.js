import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Home from './components/Home.vue'
import Create from './components/Create.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'create',
    path: '/create',
    component: Create
  }
];

const router = new VueRouter({ mode: 'history', routes: routes })

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue(Vue.util.extend({router}, App)).$mount('#app');