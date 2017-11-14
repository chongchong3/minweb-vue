import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import chat from './modules/chat';
import leftBar from './modules/leftBar';
import desinerDetails from './modules/desinerDetails';
import caseDetails from './modules/caseDetails';
import userInfo from './modules/login';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    chat,
    leftBar,
    desinerDetails,
    caseDetails,
    userInfo

  },
  getters
});

export default store
