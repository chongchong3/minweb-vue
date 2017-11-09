import { getCaseDetails } from '@/api/caseDetails';
const caseDetails = {
  state: {
    data: {},
  },

  mutations: {
    SELECT_CASE_DETAILS: (state, data) => {
      state.data = data;
    },

  },

  actions: {
    // 获取
    GetCaseDetails({ commit },params) {
      return new Promise((resolve, reject) => {
        getCaseDetails(params)
      .then(response=>{
        commit("SELECT_CASE_DETAILS",response.data.data.message);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
    },

  }
};

export default caseDetails;
