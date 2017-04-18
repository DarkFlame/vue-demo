
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import store from './store'
import routes  from './routes'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import VueFire from 'vuefire'
import EChart from './common/ECharts.vue'
import 'element-ui/lib/theme-default/index.css'
import { currency } from './currency'
import {usersRef} from './models/index'
import 'echarts'
Vue.filter('currency', currency)
Vue.component('chart', EChart)

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueFire)

const router = new VueRouter({
    // mode: 'history',
    mode: 'hash',
    base:'app',
    routes // （缩写）相当于 routes: routes
})
/**
 * 把route对象添加到store中 可以直接访问
 */
sync(store, router)
new Vue({
    firebase: {
        usersRef
    },
    store,
    router,
    render: h => h(Home)
}).$mount('#app')
