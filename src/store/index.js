import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import caseList from './modules/caseList';
import desinerList from './modules/desinerList';
import chat from './modules/chat';
import leftBar from './modules/leftBar';
import desinerDetails from './modules/desinerDetails';
import caseDetails from './modules/caseDetails';
import userInfo from './modules/login';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    caseList,
    desinerList,
    chat,
    leftBar,
    desinerDetails,
    caseDetails,
    userInfo

  },
  getters
});

export default store
