<template>
  <el-row class="container">




	  <!--  导航头部 -->
      <el-col :span='24' class="header">
			<el-col :span="20" class="logo" text-left>
				<img src="../assets/query_logo.png" alt="z中国人寿">
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
      </el-col>









      <el-col :span='24' class="main">
            <el-aside :class="collapsed?'menu-collapsed':'menu-expanded'" width="">

				<!--导航菜单-->	
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router collapse-transition v-show="!collapsed" :style="collapsed?'width:60px;':'width:180px'">

					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :key='index' :index="index+''" v-if="!item.leaf"  popper-class='menu-style'>
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item  v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item :key='index'  v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>

				</el-menu>

				
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed" >
					<li v-for="(item,index) in $router.options.routes" :key='index' v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>



			</el-aside>
			<section class="content-container" >
				<div class="grid-content bg-purple-light">

					<!-- 页面路径 -->
					<!-- <el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col> -->
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view> 
						</transition>
					</el-col>
				</div>
			</section> 
      </el-col>

	</el-row>
</template>
<script>

export default {
    name:'Home',
    data () {
        return {
			 sysName:'后台管理系统',
            collapsed:false,
            sysUserAvatar:'',
			sysUserName:'',
			form:{
				name:'',
				region:'',
				date1:'',
				date2:'',
				delivery:false,
				type:[],
				resoure:'',
				desc:''
			}
			
        }
    },
    methods: {

        	//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			handleopen(){
				  console.log('handleOpen')
			},
			handleclose(){
				console.log('handleclose')
			},
			handleselect(){
				console.log('handleselect')
			},
			//  退出登录
			logout:function(){
				let _this=this;
				this.$confirm('确认推出吗?','提示',{
					//  type:'warning'
				}).then(()=>{
					sessionStorage.removeItem('user');
					_this.$router.push('/login')
				}).catch(()=>{

				});
			},
			//  折叠菜单栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				console.log(i,status);
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
	},
	mounted(){
		console.log(this.$router)
		console.log(this.$route)
		console.log('查询当前路由')
		let user=sessionStorage.getItem('user');
		if(user){
			user=JSON.parse(user);
			this.sysUserName=user.name||'';
			this.sysUserAvatar=user.avatar||'';
		}

	}
}
</script>
<style lang="less" scoped>
// @import '@scss_vars';
.container{
    position: absolute;
    top: 0px;
    bottom: 0px;
	width: 100%;
	background: #fff;
    .header{
        height: 60px;
        line-height: 60px;
        color: #fff;
        .userinfo{
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner{
                cursor: pointer;
                color: #fff;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 0px 10px 10px;
                    float:right;
                }
            }
        }
		.logo{ 
			height: 60px;
			font-size: 22px;
			padding-left: 20px;
			padding-right: 20px;
			border-color: rgba(281, 241, 146, 0.3);
			border-right-width: 1px;
			border-right-style: solid;
			img{
				float: left;
				margin: 10px 10px 10px 18px;
			}
			.txt{
				color: #fff;
			}
		 }
        .tools{
            padding: 0px 23px;
            width: 14px;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .main{
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 0px;
		overflow: hidden;
		background: #e6e6e6;
		box-sizing: border-box;
        padding-top: 20px;
        .aside{
			flex: 0 0 180px;
			width: 180px;
			.el-menu{
				height: 100%;
				background: #eef1f6;
				.el-menu-item{
					min-width: 10px;
				}
			}
			
			.collapsed{
				.item{
					position: relative;
				}
				.submenu{
					position: absolute;
					top: 0px;
					left: 60px;
					z-index: 99999;
					height: auto;
					display: none;
				}
			}  
		}
		.menu-collapsed{
			float:0 0 60px;
			width: 60px;

		}
		.menu-expanded{
			flex: 0 0 180px;
			width: 180px;
			margin-right: 20px;
		}
		.content-container{
			flex: 1;
			overflow-y: scroll;
			.breadcrumb-container{
				// margin-bottom: 15px;
				.title{
					width: 200px;
					float: left;
					color: #475669;
				}
				.el-breadcrumb__inner{
					float:right;
				}
			}
			.content-wrapper{
				background-color: #fff;
				box-sizing: border-box;
			}
		}
		.el-submenu,.el-menu-item{
			text-align: left;
		}
	

    }
    
      
      


}


</style>


