import * as type from '../mutation-types'
export const state = {
    msg: 'init'
}
export const getters = {
    msg(state) {
        return state.msg
    }
}

export const actions = {
    setMsg({commit},payload) {
        commit(type.LOGIN_SET_MSG,payload)
    }
}

export const mutations = {
    [type.LOGIN_SET_MSG](state,payload){
        state.msg = payload
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}