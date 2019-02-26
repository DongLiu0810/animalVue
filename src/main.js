import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import axios from 'axios'
import VueAxios from 'vue-axios'


import 'iview/dist/styles/iview.css';
Vue.use(VueAxios, axios);
Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')