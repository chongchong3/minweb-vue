const wxAuthorize = {
    state: {
      authData: {},
    },
  
    mutations: {
      setNav: (state, json) => {
        state.authData = json;
        
      },
  
    },
  

  };
  
  export default wxAuthorize;