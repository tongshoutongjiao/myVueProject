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