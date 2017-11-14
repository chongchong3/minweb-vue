const appointment = {
    state: {
      data: {
       desiner_head_img:'',
       desiner_name:'',
       desiner_id:''
      },
    },
  
    mutations: {
      setData: (state, json) => {
        state.data = json;
        
      },
  
    },
  

  };
  
  export default appointment;