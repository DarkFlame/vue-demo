import * as type from '../mutation-types'
export const state = {
    segmentTableList: []
}
export const getters = {
    segmentTableList(state) {
        return state.segmentTableList
    }
}

export const actions = {
    getSegmentTableList({commit},payload) {
        commit(type.SET_SEGMENT_TABLE_LIST,payload)
    }
}

export const mutations = {
    [type.SET_SEGMENT_TABLE_LIST](state,payload){
        state.segmentTableList = payload
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}