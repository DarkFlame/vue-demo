import App from './components/app.vue'
import Login from './components/login/login.vue'
import TableIndex from './components/table/table.vue'
import ChartIndex from './components/table/chart.vue'
import TableNavIndex from './components/table/nav.vue'
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
        path: '/tableNav',
        component: TableNavIndex,
        children: [{
            path: 'table',
            components: {
                default:TableIndex
            }
        },{
            path: 'chart',
            components: {
                default:ChartIndex
            }
        }]
    }
]