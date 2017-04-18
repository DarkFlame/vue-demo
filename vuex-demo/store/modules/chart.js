import * as type from '../mutation-types'
import {chartRef} from '../../models'

export const state = {
    chartDisplayData: []
}
export const getters = {
    chartDisplayData(state) {
        return state.chartDisplayData
    }
}

export const actions = {

    getChartDisplayData({commit}) {
        chartRef.limitToLast(100).once('value').then((res) => {
            commit(type.CHART_SET_DISPLAYDATA,res.val())
        });
    }
}

export const mutations = {
    [type.CHART_SET_DISPLAYDATA](state,payload){
        let arr = []
        for (let [key,item] of Object.entries(payload)) {
            arr.push(item)
        }
        state.chartDisplayData = arr
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