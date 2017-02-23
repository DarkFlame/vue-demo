// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {template: '<div>foo</div>'}
const Login = {template: '<div>need Login</div>'}
const Bar = {template: '<div>bar</div>'}
const UserHome = {template: '<div>UserHome</div>'}
const UserProfile = {template: '<h1>userporfile</h1>'}
const UserPost = {template: '<h1>UserPost</h1>'}
const NotFoundComponent = {template: '<h1>notFound</h1>'}
const User = {
    template: `
<div>
    {{$route.params.id}}
    <transition :name="transitionName" mode="out-in">
        <router-view class="child-view"></router-view>
    </transition>
    <router-view name="d"></router-view>
</div>`,
    watch: {
        '$route' (to,from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
    beforeRouteEnter (to,from,next) {
        console.log('beforeRouteEnter')
        next()
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to,from,next) {
        console.log('beforeRouteUpdate')
        next()
        // 在当前路由改变，但是改组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to,from,next) {
        console.log('beforeRouteLeave')
        next()
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
    }
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    // {
    //     path: '*',
    //     component: NotFoundComponent
    // },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/bar',
        component: Bar
    },
    {
        path: '/user/:id',
        components: {
            default: User,
            a: Bar,
            b: Foo
        },
        beforeEnter: (to,from,next) => {
            console.log('进入user的路由');
            next();
        },
        meta: {requiresAuth: true},
        children: [{
            path: '',
            name: 'user',
            components: UserHome
        },{
            path: 'userProfile',
            name: 'userProfile',
            alias: 'userProfileAlias',
            components: {
                default: UserProfile,
                d: Bar
            },
            beforeEnter: (to,from,next) => {
                console.log('进入userProfile的路由');
                next();
            },
        },{
            path: 'userPost',
            name: 'userPost',
            alias: 'userPostAlias',
            component: UserPost,
            beforeEnter: (to,from,next) => {
                console.log('进入userPost的路由');
                next();
            },
        }]
    }
];


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    // mode: 'history',
    mode: 'hash',
    routes // （缩写）相当于 routes: routes
})

router.beforeEach((to,from,next) => {
    console.log(to,from,next);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        //
        // next({
        //     path: '/login',
        //     query: {redirect: to.fullPath}
        // })

    }
    next()
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app')
