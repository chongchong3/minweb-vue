const getters = {
    deserList: state => state.desinerList.dataList,
    nav:state=>state.leftBar.nav,
    caseList:state=>state.desinerCase.dataList,
    desinerDetails:state=>state.desinerDetails.dataList,
    caseDetails:state=>state.caseDetails.data,
    userInfo:state=>state.userInfo.data

  };
  
  export default getters
  