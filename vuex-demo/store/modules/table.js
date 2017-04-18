import * as type from '../mutation-types'
import {usersRef} from '../../models'
import moment from 'moment'

export const state = {
    isDisable:false,
    tableDisplayData: []
}
export const getters = {
    tableDisplayData(state) {
        return state.tableDisplayData
    }
}

export const actions = {
    setDisable({commit},payload) {
        commit(type.TABLE_SET_ISDISABLE,payload)
    } ,
    getTableDisplayData({commit}) {
        usersRef.limitToLast(100).once('value').then((res) => {
            commit(type.TABLE_SET_DISPLAYDATA,res.val())
        });
    }
}

export const mutations = {
    [type.TABLE_SET_ISDISABLE](state,payload){
        state.isDisable = payload
    },
    [type.TABLE_SET_DISPLAYDATA](state,payload){
        let arr = []
        for (let [key,{username,password,createdAt}] of Object.entries(payload)) {
            arr.push({
                key,
                username,
                password,
                createdAt
            })
        }
        state.tableDisplayData = arr
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