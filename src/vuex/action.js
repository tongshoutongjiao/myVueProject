//test
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
export const setSelectKey = ({commit},args) => {
    commit('SETKEY',args)
}

export const setQueryData=({commit},args)=>{
    console.log('啦啦啦啦')
    commit('SETQUERYDATA',args)
}