import { getDesinerMes } from '@/api/desinerList';
const desinerList = {
  state: {
    dataList: {},
  },

  mutations: {
    SELECT_DESINER: (state, data) => {
      state.dataList = data;
    },

  },

  actions: {
    // 获取
    GetDesinerMes({ commit },params) {
      return new Promise((resolve, reject) => {
      getDesinerMes(params)
      .then(response=>{
        
        commit("SELECT_DESINER",response.data.data.result);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
    },

  }
};

export default desinerList;
