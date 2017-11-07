import { getDesinerMes } from '@/api/desinerDetails';
const desiner = {
  state: {
    deserData: {},
  },

  mutations: {
    SELECT_DESINER_DETAILS: (state, data) => {
      state.deserData = data;
    },

  },

  actions: {
    // 获取
    GetDesinerDetails({ commit },params) {
      return new Promise((resolve, reject) => {
      getDesinerDetails(params)
      .then(response=>{
        
        commit("SELECT_DESINER_DETAILS",response.data.data.result);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
    },

  }
};

export default desiner;
