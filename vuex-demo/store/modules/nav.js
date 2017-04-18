import * as type from '../mutation-types'

export const state = {
    subNavDefaultActive: ''
}
export const getters = {
    subNavDefaultActive(state) {
        return state.subNavDefaultActive
    }
}

export const actions = {
    setNavDefaultActive({commit},payload){
        commit(type.SET_NAV_DEFAULTINDEX,payload)
    }
}

export const mutations = {
    [type.SET_NAV_DEFAULTINDEX](state,payload){
        state.subNavDefaultActive = payload
    }
}


export default {
    //通过添加命名空间的方式 防止不同模块间actions mutations命名相同的问题
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}