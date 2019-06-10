import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getter'

Vue.use(Vuex)

// 应用初始状态
const state={
    count:10,
    selectKey:'',

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
    }
}

//  创建store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})