import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import Case from './modules/caseData';
import desiner from './modules/desinerData';
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
