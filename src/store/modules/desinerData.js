import { getDesinerMes } from '@/api/desinerData';
const desiner = {
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
    GetDesinerMes({ commit },params) {
     
      getDesinerMes(params)
      .then(response=>{
        debugger
        // commit("SELECT_DESINER",response.data.result)
          
      })
      .catch(error => {
        console.log(error);
      });

    },

  }
};

export default desiner;
