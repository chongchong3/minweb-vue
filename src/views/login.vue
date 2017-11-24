<template>
  <div class="login-c">
      <div class="login-title">
				<div class="aside">
					<img src="static/images/login_hd.png">
				</div>
				<div class="cont">
					<p class="tit">手机登录</p>
					<p class="brief">帮助您快速的预约设计师</p>
				</div>
				<span class="close" @click="goBack()">	<img src="static/images/loginClose.png"></span>
			</div>
      <div class="input-c">
      	<div class="input-box">
	      	<input class="phone-num" @keyup="validatePhone($el,$event)"  maxlength="11"   id="phone" placeholder="输入手机号" type="tel"/>
      	</div>
      	<div class="input-box code">
	      	<input class="valid-code" @keyup="validCode" id="validCode" maxlength="4" placeholder="输入验证码" type="number"/>
	      	<input type="button" id="validBtn" v-bind:class="['valid-btn',{'valid-enable':validEnable}]"  @click="getValidCode" :disabled="isDisable" value="获取验证码"/>
      	</div>
      </div>
		<div class="submit">
  		<input type="button" @click="doLogin" v-bind:class="['login-btn-c',{'login-btn-enable':loginEnable}]" :disabled="loginBtnDisable" value="验证登录"/>
		</div>
    
  </div>
</template>
<script>
import { MessageBox ,Toast} from 'mint-ui'
import 'mint-ui/lib/style.css'
import { sendMsg } from "../api/login";
import { getUserInfo } from "../api/login";
import { miniSiteAppoints } from '@/api/appoints'; //预约设计师
const reg = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
const regNum = /^([0-9]{4})$/;
export default {
	data(){
		return {
			isSend:false,
			isDisable:true,
			validEnable:false,
			loginEnable:false, // 登陆样式
			loginBtnDisable:true, // 登陆是否可以点击
			user_id:null,
			authorization_id:null,
			designer_uid:null,
		}
	},
  mounted(){
  	document.getElementById("app").style.paddingTop = 0;
  },
  methods:{
	//登陆
  	doLogin:function(){
		var _self = this;
		this.designer_uid = this.$route.query.designer_uid;
		this.authorization_id=this.getCookie("wechat_id");
		this.$store
			.dispatch("GetUserInfo", { "phone_num":document.getElementById("phone").value, 'message_code':document.getElementById("validCode").value, 'authorization_id':this.authorization_id })
			.then((data) => {
				if(data.body.code != 200){
					if(data.body.code == 500){
						Toast('验证码错误!');
					}
					return
				}
				_self.loginBtnDisable = true;
				_self.loginEnable = false;
				setTimeout(function(){
					_self.loginBtnDisable = false;
					_self.loginEnable = true;
				},60000)
				_self.user_id=data.body.data.user_id
				miniSiteAppoints({"designer_uid":_self.designer_uid,"user_id":_self.user_id} ) //预约设计师
					.then(function(response){
						if(response.data.code!=200){
							if(response.data.code==500){
										return MessageBox('提示', '你已经预约过了');
								} 
							return MessageBox('提示', '查询异常');
						} 
						MessageBox('提示', '预约成功');
						return setTimeout(function(){
							history.go(-1);
						})
				})
			
			})
			
			.catch(err => {
					 MessageBox('提示', '连接失败');
        });
		
		},
		isWxLogin(){

		},
		notWxLogin(){

		},
	//   查询是否预约
	/**@augments
	 * 查询预约记录接口
	 * url : /Designer/checkAppointsStatus
	 * @param  {"user_id":"43320788568244268"}
	 * 如果有预约记录 返回设计师id
	 * success
	 * "code": 200,
  		"data": {
    		"message": "43207696962329537"   //message里面为设计师id
		}
	 */
	searchInfo(user_id){

	},
	//预约设计师
	/**@augments
	 * 预约设计师接口
	 * url : /Designer/miniSiteAppoints
	 * @param {"designer_uid":"43207696962329537","user_id":"43320788568244268"} 
	 * success 
	 * {
		"code": 200,
		"data": {
			"message": "预约成功！"
		},
	*/
	reserveDesiner(designer_uid,user_id){
		
	},

  	validLogin:function(){
  		if(this.validPhone() && this.validValidcode()){
  			this.loginBtnDisable = false;
  			this.loginEnable = true;
  		}else{
  			this.loginBtnDisable = true;
  			this.loginEnable = false;
  		}
  	},
  	validCode:function(){
  		this.validLogin();
  	},
  	validatePhone:function(el,e){
  		let result = this.validPhone();
			this.isDisable = !result;
			this.validEnable = result;
			this.validLogin();
	  },
	// 清除手机号码
  	clearPhone:function(){
  		document.getElementById("phone").value="";
  	},
  	getValidCode:function(){
		 var _self=this;
  		this.isDisable = true;
			this.validEnable = false;
			this.resend(document.getElementById("validBtn"),this);
  		sendMsg({"phone_num":document.getElementById("phone").value})
  		.then(function(data){
  			if(data.body.code == 200){
  				Toast('验证码发送成功!');
  			}
  		},function(err){
  			//
  		});
  		
  	},
  	resend:(element,vue)=>{
			  let num = 60;
			  let timer = setInterval(function () {
			    num--
			    element.value = num + 'S';
			    if (num === 0) {
			    	if(vue.validPhone()){
				      vue.isDisable = false;
							vue.validEnable = true;
			    	}
			      element.value = '获取验证码';
			      clearInterval(timer)
			    }
			  }, 1000)
  	},
  	validPhone:()=> reg.test(document.getElementById("phone").value.trim()),
		validValidcode:()=> regNum.test(document.getElementById("validCode").value),
		 getCookie(name) {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
			},
			goBack(){
				window.history.back(); 
			}
  }
};
</script>
<style scoped="scoped">
.login-c {
  width: 100%;
  height: 100%;
  background-size: 100%;
}
.login-title {
	height: 1.1rem;
	background: #000018;
	overflow: hidden;
	position: relative;
}
.login-title .aside {
	width:.85rem;
	float:left;
}
.login-title .aside img {
	width:100%;
}
.login-title .cont {
	margin-left:.85rem;
	color:#fff;
}
.login-title .cont .tit{
	margin-left:.65rem;
	margin-top:.25rem;
	font-size:.18rem;
	margin-bottom:.14rem;
	padding:0;
}
.login-title .cont .brief{
	font-size:.13rem;
	margin-left:.24rem;

}
.login-title .close{
	display: inline-block;
	position: absolute;
	right: .15rem;
	top:.1rem;
	width:.15rem;
	padding:.05rem;
	
}
.login-title .close img{
	width:100%;

}
.input-c {
	margin:0 .15rem;
}
.input-c .input-box {
	width:100%;
	padding:.22rem 0;
	position: relative;
	border-bottom:#eee 1px solid;
	outline: none;
}
.input-c .input-box  input {
	outline: none;
	border:none;
}
.input-c .input-box.code {
	width:2.35rem;
}
.input-box  input {
	font-size:.14rem;
	color:#333;
	line-height: .25REM;
}
input::-webkit-input-placeholder {color:#A2ACC5;}
input::-moz-input-placeholder {color:#A2ACC5;}
input::-ms-input-placeholder {color:#A2ACC5;}

.valid-send-des-c {
	margin-top:.33rem;
}
.valid-send-des {
  font-size: 0.26rem;
  color: #82dd46;
  text-align: center;
  margin-top: 0;
}


.input-box  input.valid-btn {
	line-height: .3rem;
	width:1rem;
	border-radius: .02rem;
	color:#888;
	font-size:.12rem;
	text-align: center;	
	border: #888 1px solid;
	background-color: #fff;
	position: absolute;
	right: -1rem;
	top: .2rem;
}
.input-box  input:disabled{
	border:1px solid #ccc;
	background-color:#fff;
	color:#ccc;
}

/* .input-box  input.valid-enable {
	color:#888;
	border:#888 1px solid;

} */
.phone-remove-icon {
  display: inline-block;
  position: absolute;
  left: 1.3rem;
  top: .25rem;
  background: url(../../static/images/revoke2.png);
  background-size: 100%;
  width: 0.18rem;
  height: 0.18rem;
  z-index: 99;
}
.submit {
	margin:.5rem .15rem;
}
.submit .login-btn-c {
	width:100%;
	line-height: .44rem;
	font-size:.18rem;
	color:#C3C7D2;
	outline: none;
	background: #eeeeee;
	border:none;
}
.submit .login-btn-enable{
	color:#fff;	
	background-color: #82dd47;

}

</style>
