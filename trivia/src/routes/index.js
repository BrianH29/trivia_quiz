import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = new VueRouer({
  mode: 'history',
  routes : [
    {
      path: '/',
      redirect : '',
    }
  ]
})