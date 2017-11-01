import { desinerData } from '@/api/desinerData';
const user = {
  state: {
    deserData: {},
  },

  mutations: {
    SELECT_DESINER: (state, data) => {
    
      state.deserData = data;
    },

  },

  actions: {
    // 获取
    GetDesinerMes({ commit },desinerId) {
 
 
    },

  }
};

export default user;
