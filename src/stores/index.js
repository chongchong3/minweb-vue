import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import caseData from './modules/caseData';
import desinerData from './modules/desinerData';
import login from './modules/login';
import chat from './modules/chat';

import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    desiner,

  },
  getters
});

export default store
