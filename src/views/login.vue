<template>
  <el-container>
    <el-header>
      <div class="header-nav">
        <span class="logo"></span>
        <span class="sys-name">人员架构管理平台</span>
      </div>
    </el-header>
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      ref="ruleForm2"
      label-position="left"
      label-width="10px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">用户登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="输入用户名"></el-input>
        <i class="el-icon-user"></i>
      </el-form-item>
      <el-form-item prop="checkPass">
        <i class="el-icon-lock"></i>
        <el-input
          type="password"
          v-model="ruleForm2.checkPass"
          auto-complete="off"
          placeholder="输入6到24位密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" v-model="ruleForm2.code" placeholder="请输入验证码">
          <template slot="append">
            <img :src="imgUrl" @click="changeImageCode" alt="验证码图片">
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="login-info" prop="checked">
        <el-checkbox
          v-model="ruleForm2.checked"
          class="remember"
          style="vertical-align: middle;"
        >一周内免登录</el-checkbox>
        <el-link type="primary" @click="forgetPassword" :underline="false">忘记密码？</el-link>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button
          class="loginButton"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleSubmit2"
          :loading="logining"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>


<script>
import {requestLogin, getEmpByEmpId, getCodeImage } from "../api/api";

const baseUrl = 'http://10.18.13.119:8289';

export default {
  data() {
    return {
      logining: false,
      imgUrl: "",
      imageCode: "",
      ruleForm2: {
        account: "admin",
        checkPass: "123456",
        checked:true,
        code:''
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [ { required: true, message: "请输入正确的密码", trigger: "blur" }],
        code: [ { required: true, message: "请输入正确的验证码", trigger: "blur" } ]
      },
     
    };
  },
  computed() {
  
  },
  created() {
    this.getImageCode();
    console.log('zzz')
   
  },

  methods: {

    // 提交验证
    handleSubmit2() {
      let params={};
      let that = this;
      let {account,checkPass,checked,code}=this.ruleForm2;
      checkPass=this.checkpassword(checkPass);
      params={
        'username':account,
        'password':checkPass,
        'remember-me':checked,
        'imageCode':code
        }
        this.logining=true;
        console.log('查看基本的axios配置')
        console.log(this.$axios);
      this.$axios.post(`${baseUrl}/orgtree/login`, params, {
        headers: {
            'code': code,
            'remember':checked
        }
    }).then((res)=> {
      this.logining=false;
        const data = response.data;  
        console.log('保存数据到session中,同时跳转到下一个页面')
    }, err=> {
      
      console.log(err);
        // throw new Error('接口不通,请重新尝试');
       this.mockLogin(account,that.ruleForm2.checkPass);
      })},

    // 忘记密码
    forgetPassword() {
      this.$message("请联系管理员");
    },
    mockLogin(account,pwd){
      requestLogin({
        'username':account,
        'password':pwd
      }).then(res=>{
        console.log('成功')
        console.log(res);
        this.logining = false;
         this.$router.push({ path: '/table' });
         let { msg, code, user } = res;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                 sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/table' });
              }
      },err=>{
        console.log(err)
      })
    },

    // 改变图片验证码
    changeImageCode() {
      let that=this;
      this.imgUrl='';
      this.$nextTick(() => {
       that.getImageCode();
      })
    },

    //  获取code 值
    getImageCode() {
      console.log('获取验证码')
        getCodeImage({}).then(data => {
          this.imgUrl = data;
        });
    },

    //  获取密码加密值
    checkpassword(pwd){
      console.log(pwd);
    return  this.$getCode();
    }
  }
};
</script>
<style lang="less" scope>
.header-nav {
  margin: 70px auto 20px;
  span {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .logo {
    width: 148px;
    background: url("../assets/logo.png") center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .sys-name {
    font-size: 20px;
    position: relative;
  }
}
.login-container {
  border-radius: 5px;
  background-clip: padding-box;
  margin: 100px auto;
  width: 350px;
  padding: 0px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #29d08e7d;
  .login-info {
    display: flex;
    justify-content: space-around;
    .el-checkbox {
      vertical-align: middle;
      float: left;
    }
  }
  .title {
    margin: 0px auto 20px auto;
    text-align: center;
    background: #31ad71;
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    margin-left: -35px;
    margin-right: -35px;
    font-weight: normal;
    letter-spacing: 5px;
  }
  .loginButton {
    background: #31ad71;
    outline-color: #29d08e7d;
    border-color: #29d08e7d;
  }
  input {
    padding-left: 30px;
  }

  .el-input-group__append {
    width: 70px;
    height: 35px;
    padding: 0;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  .el-icon-user,
  .el-icon-lock {
    position: absolute;
    left: 5px;
    top: 30%;
    font-size: 16px;
    z-index: 10;
  }
}
</style>
