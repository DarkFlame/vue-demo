import App from './components/app.vue'
import Login from './components/login/login.vue'
import TableIndex from './components/table/table.vue'
export default  [
    {
        path: '/',
        component: App
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/TableIndex',
        component: TableIndex
    }
]