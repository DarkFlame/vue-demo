import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import cart from './modules/cart'
import login from './modules/login'
import table from './modules/table'
import segment from './modules/segment'
import products from './modules/products'
import createLogger from 'vuex/dist/logger'
import myPlugin from './plugin'
//为什么vuex在这里注入 是因为必须在new store之前注入到vue中
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store =  new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products,
        login,
        segment,
        table
    },
    mutations,
    strict: debug,
    plugins: debug ? [createLogger({
            collapsed: false, // 自动展开记录的 mutation
        }),myPlugin()] : []
})

if (module.hot) {
    // 使 actions 和 mutations 成为可热重载模块
    module.hot.accept(['./mutations', './modules/login'], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
        const newMutations = require('./mutations').default
        const newModuleA = require('./modules/login').default
        // 加载新模块
        store.hotUpdate({
            mutations: newMutations,
            modules: {
                login: newModuleA
            }
        })
    })
}
export default store



