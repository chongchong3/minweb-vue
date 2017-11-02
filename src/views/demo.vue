<template>
  <div class="lefBar">
      <div class="shadow"></div>
      <div class="nav">
          <ul>
              <li>
                  <router-link  to="/index">
                      <i><img src="static/images/home.png"></i>
                      <span>首页</span>
                  </router-link>
              </li>
                <li>
                  <router-link  to="/caseList">
                      <i><img src="static/images/trash.png"></i>
                      <span>查看案例</span>
                  </router-link>
              </li>
                <li>
                  <router-link  to="/desinerList">
                      <i><img src="static/images/person.png"></i>
                      <span>找设计师</span>
                  </router-link>
              </li>
                <li>
                  <router-link  to="/chat">
                      <i><img src="static/images/call.png"></i>
                      <span>在线咨询</span>
                  </router-link>
              </li>
                <li>
                  <router-link  to="aboutUs">
                      <i><img src="static/images/warn.png"></i>
                      <span>关于</span>
                  </router-link>
              </li>
          </ul>
          
      </div>
  </div>
</template>
<style scoped>
.lefBar{
    position: relative;
    background: #fafafa;
    height: 100%;
}
.lefBar ul {
    margin:0;
    padding:0;
}
.lefBar ul,
.lefBar li {
  list-style: none;
  
}
.lefBar {
  width: 100%;
  height: 100%;
  position: relative;
}
.lefBar ul li i {
  width: 0.16rem;
  display: inline-block;
  vertical-align: middle;
}
.lefBar ul li i img {
  width: 100%;
}
.lefBar ul li i span {
  display: inline-block;
  vertical-align: middle;
}
</style>

<script>
export default {};
</script>
