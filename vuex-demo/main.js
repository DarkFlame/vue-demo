
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import store from './store'
import routes  from './routes'
import ElementUI from 'element-ui'
import VueFire from 'vuefire'
import 'element-ui/lib/theme-default/index.css'
import { currency } from './currency'
import {usersRef} from './models/index'

Vue.filter('currency', currency)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueFire)

const router = new VueRouter({
    // mode: 'history',
    mode: 'hash',
    base:'app',
    routes // （缩写）相当于 routes: routes
})

new Vue({
    firebase: {
        usersRef
    },
    store,
    router,
    render: h => h(Home)
}).$mount('#app')
