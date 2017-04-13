import * as type from '../mutation-types'
export const state = {
    isDisable:false,
    tableDisplayData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    },{
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    },{
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]
}
export const getters = {
    tableDisplayData(state) {
        return state.tableDisplayData
    }
}

export const actions = {
    setDisable({commit},payload) {
        commit(type.TABLE_SET_ISDISABLE,payload)
    }
}

export const mutations = {
    [type.TABLE_SET_ISDISABLE](state,payload){
        state.isDisable = payload
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}