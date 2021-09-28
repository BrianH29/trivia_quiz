import Vue from 'vue'
import App from './App.vue'
import { store } from './store/index';
import { router } from './routes/index';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')