var Vue = require('vue')
var app = new Vue({
    render: function (h) {
        return h('p', 'hello world')
    }
})
// 步骤 2: 创建一个渲染器
var renderer = require('vue-server-renderer').createRenderer()
// 步骤 3: 将 Vue实例 渲染成 HTML
renderer.renderToString(app, function (error, html) {
    if (error) throw error
    console.log(html)
    // => <p server-rendered="true">hello world</p>
})