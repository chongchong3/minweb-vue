import { getCaseMes } from '@/api/caseData';
const desinerCase = {
  state: {
    caseData: {},
  },

  mutations: {
    SELECT_CASE: (state, data) => {
      state.caseData = data;
    },

  },

  actions: {
    // 获取
    GetCaseMes({ commit },params) {
      return new Promise((resolve, reject) => {
        getCaseMes(params)
      .then(response=>{
        
        commit("SELECT_CASE",response.data.data.result);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
    },

  }
};

export default desinerCase;
