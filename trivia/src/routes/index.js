import Vue from 'vue';
import VueRouter from 'vue-router';
import MainHome from '../views/MainHome';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/',
      redirect : '/home',
    },
    {
      path: '/home',
      component : MainHome,
    },
    {
      path : '/sports',
    },
    {
      path : '/film',
    },
    {
      path: '/music',
    },
    {
      path : '/history',
    },
    {
      path : '/animals',
    }
  ]
})