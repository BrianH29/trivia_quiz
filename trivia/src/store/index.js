import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutaions.js';

Vue.use(Vuex); 

export const store = new Vuex.Store({
  state : {

  },
  actions,
  mutations,
})