import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index.js'
import Mock from './mock'
import JsEncrypt from 'jsencrypt'
 import 'font-awesome/css/font-awesome.min.css'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios';


Mock.bootstrap();
Vue.prototype.$axios=axios;
Vue.prototype.$getCode=function(pwd){
  // new 一个对象
  let encrypt=new JsEncrypt();
  var PUBLIC_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwjDm1HXDw8QH5ZtGMQIl2h/I8E+chOQA8aQ8xCR/+aHnROaN/ZU5Vmd2Zz7g6cAacR9BSm60+iSCYtvEGJKl0WqvbPGJkc8tedjNF1QqgWqkkuE6Udgw2OkEKJCxDg6PrAniR7Cc0io9G8bW4P8JDJjSbbafvMPDDFbVVUWJxxwIDAQAB";
  encrypt.setPublicKey(PUBLIC_KEY);
  let data=encrypt.encrypt(pwd);
  return data;
}

// 设置axios请求的token
axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if(to.path==='/login'){
    sessionStorage.removeItem('user')
  }
  let user=JSON.parse(sessionStorage.getItem('user'))
  if(!user&&to.path!='/login'){
    next({path:'/login'})
  }else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
