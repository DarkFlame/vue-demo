import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import cart from './modules/cart'
import login from './modules/login'
import products from './modules/products'
import createLogger from 'vuex/dist/logger'
import myPlugin from './plugin'
//为什么vuex在这里注入 是因为必须在new store之前注入到vue中
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products,
        login
    },
    mutations,
    strict: debug,
    plugins: debug ? [createLogger({
            collapsed: false, // 自动展开记录的 mutation
        }),myPlugin()] : []
})