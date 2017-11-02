<template>
  <div class="lefBar">
      <div class="shadow"></div>
      <div class="nav">
          <ul>
              <li class="active">
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
.lefBar {
    width:100%;
    height: 100%;
    position: relative;
}
.shadow {
    position: absolute;
    width:100%;
    height: 100%;
    opacity: .5;
    z-index: 2;
    background-color: #000;

}
.lefBar ul {
    margin:0;
    padding:.16rem 0 0 0;
}
.lefBar ul,
.lefBar li {
  list-style: none;
  
}
.lefBar li.active{
    background: #eeeeee;
}
.lefBar .nav{
       position: relative;
       z-index:55;
    width:66.718%;
    position: relative;
    background: #fafafa;
    height: 100%;
}
.lefBar ul li i {
  width: 0.16rem;
  display: inline-block;
  vertical-align: middle;
  margin-left:.14rem;
}
.lefBar ul li:nth-child(1){
    margin-top:0;
}
.lefBar li:last-child{
    padding-top: .05rem;
    border-top:#eee 1px solid;
}
.lefBar li {
    line-height: .33rem;
    margin:.14rem 0;
    
}
.lefBar ul li i img {
  width: 100%;
}
.lefBar ul li i span {
  display: inline-block;
  vertical-align: middle;
}
.lefBar li  a {
    color:#666;
    text-decoration: none;
}
</style>

<script>
export default {};
</script>
