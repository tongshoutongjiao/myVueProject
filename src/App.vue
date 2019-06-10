<template>
  <div id="app">
    <transition name='fade' mode='out-in'>
        <router-view></router-view>
    </transition>  
  </div>
</template>

<script>
export default {
  name:'app',
  components: {
    
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style lang='less'>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  box-sizing: border-box;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  height: 100%;
  position: absolute;
	top: 0px;
	bottom: 0px;
  width: 100%;
  background: url('./assets/bg.png') bottom no-repeat;
  background-size: cover;
}
.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}
.toolbar {
	background: #fff;
	padding: 10px;

	margin: 10px 0px;
	.el-form-item {
		margin-bottom: 10px;
	}
}
.fade-enter-active,.fade-leave-active{
  transition: all .2s ease;
}
.fade-enter,.fade-leave-active{
  opacity: 0;
}


</style>
