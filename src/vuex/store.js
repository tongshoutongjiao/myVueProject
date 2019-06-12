import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getter'

Vue.use(Vuex)

// 应用初始状态
const state={
    count:10,
    selectKey:'',
    queryData:[{
            label: '中国人寿保险股份有限公司',
            id:1,
            children: [{
              label: '董事会秘书局',
              id:2,
          
              children: [{
                label: '三级 1-1-1',
                id:3
              }]
            },{
                label: '战略与市场部',
                id:5,
                children:[
                  {
                    label:'资源整合处',
                    id:6
                  }
                ]
          
            },{
              label:'人力资源部',
              id:7,
              children:[{
                label:'绩效管理处',
                id:8
              }]
            }]
          }]

}

// 定义所需的mutations
const mutations={
    SETKEY(state,key){
        state.selectKey=key
        console.log(state);
    },
    INCREMENT(state){
        state.count++
    },
    DECREMENT(state){
        state.count--
    },
    SETQUERYDATA(state,args){
        console.log('wuwuwu')
        console.log(args);
        state.queryData[0].children.push(args[0])
        
    }
}

//  创建store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})