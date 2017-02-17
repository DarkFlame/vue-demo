Vue.component('example', {
    template: '<span @click="updateMessage">{{ message }}</span>',
    data: function () {
        return {
            message: 'not updated'
        }
    },
    methods: {
        updateMessage: function () {
            this.message = 'updated'
            console.log(this.$el.textContent) // => '没有更新'
            this.$nextTick(function () {
                console.log(this.$el.textContent) // => '更新完成'
            })
        }
    }
})


var watchExampleVM = new Vue({
    el: '#app',
    data: {}
})