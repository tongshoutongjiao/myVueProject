import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Login from '../views/login.vue'
import Home from '../views/home.vue'
import NotFound from '../views/404.vue'
import Table from '../views/nav1/table.vue'
import Main from '../views/nav1/main.vue'
import Form from '../views/nav1/form.vue'
import User from '../views/nav1/user.vue'
import Page4 from '../views/nav2/Page4.vue'
import Page5 from '../views/nav2/Page5.vue'
import Page6 from '../views/nav3/Page6.vue'
import echarts from '../views/charts/echart.vue'
import Organize from '../views/manage/organize-manage.vue'
import Self from '../views/manage/self-manage.vue'
import Manu from '../views/manage/manufacture-manage.vue'
export default new  Router({
    mode:'history',
    linkActiveClass:'active',
    routes: [
        {
            path: '/login',
            name: 'Login',
            hidden:true,
            component: Login
        },
        {
            path:'/404',
            component:NotFound,
            name:'',
            hidden:true

        },
        {
            path:'/',
            component:Home,
            name:'业务模块',
            iconCls:'fa fa-dedent',
            children:[
                { path: '/organize', component: Organize, name: 'Organize' },
                { path: '/self', component: Self, name: 'Self' },
                { path: '/manu', component: Manu, name: 'Manu' },
            ]

        },
        {
            path: '/',
            component: Home,
            name: '导航一',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                { path: '/main', component: Main, name: '主页', hidden: true },
                { path: '/table', component: Table, name: 'Table' },
                { path: '/form', component: Form, name: 'Form' },
                { path: '/user', component: User, name: '列表' },
            ]
        },
        {
            path:'/',
            component:Home,
            name:'导航二',
            iconCls:'fa fa-id-card-o',
            children:[
                { path: '/page4', component: Page4, name: '页面4' },
                { path: '/page5', component: Page5, name: '页面5' }
            ]
        },
        {
            path:'/',
            component:Home,
            name:'',
            leaf:true,// 只有一个节点
            iconCls:'fa fa-address-card',
            children:[
                {path:"/page6",component:Page6,name:'导航三'}
            ]
        },
        {
            path:'/',
            component:Home,
            name:'Charts',
            iconCls:'fa fa-bar-chart',
            children:[
                {path:'/echarts',component:echarts,name:'echarts'}
            ]

        },
        
        {
            path:'*',
            hidden:true,
            redirect:{path:'/404'}
        }
    
    ]

})