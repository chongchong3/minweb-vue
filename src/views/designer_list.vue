<template>
  <div class="designer">
      <ul>
          <li class="designer-li">
            <img src="http://iph.href.lu/100x100?bg=00ffff" alt="" class="designer-head">
            <p class="designer-name">李发全</p>
            <p class="designer-detail">杭州/软装/12年</p>
            <p class="designer-company">冰岛工作室</p>
              
          </li>
          <!-- <li class="designer-li">

          </li> -->
      </ul>
  </div>
</template>
<style scoped>
ul, li, p{
  margin:0;
  padding:0;
  list-style-type: none;
}
.designer-li{
    position: relative;
    background: url(http://iph.href.lu/350x260?bg=000) no-repeat;
    width:100%;
    height:2.60rem;
    text-align: center;
    color: #fff;
}
.designer-head{
    position: relative;
    margin:0 auto;
    left: 0; right:0;
    top:.4rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: block;
}
.designer-name{
    margin-top:.54rem;
    font-size: .2rem;
}
.designer-detail{
    margin-top:.12rem;
    font-size: .12rem;
}
.designer-company{
    margin-top:.12rem;
    font-size: .12rem;
}
</style>
<script>
export default {
  data(){
      return{}
  },
  beforeCreate(){

  },
  created(){

  },
  methods:{

  }
}
</script>


