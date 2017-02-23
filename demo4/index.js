var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log(111)
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
    ,
    myOption:function(){
        console.log('from mixin111')
    }

}

var MyComponent = Vue.extend({
    mixins: [myMixin],
    created: function () {
        console.log('组件钩子被调用')
    },
    methods: {
        conflicting: function () {
            console.log('from self')
        }
    },
    // myOption:function(){
    //     console.log('from selfsdas')
    // }
});
var mycomponent = new MyComponent()

mycomponent.conflicting()

Vue.config.errorHandler = function (err, vm) {
    console.log('发生错误',err,vm)
}
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
    return (parent || 0) + child
}
const Profile = Vue.extend({
    _my_option: 200
});

var pro = new Profile({
    _my_option: 100
})
console.log(pro)
