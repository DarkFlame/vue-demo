
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import store from './store'
import routes  from './routes'
import { currency } from './currency'
import 'babel-polyfill'
Vue.filter('currency', currency)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    base:'app',
    routes // （缩写）相当于 routes: routes
})
new Vue({
    store,
    router,
    render: h => h(Home)
}).$mount('#app')
