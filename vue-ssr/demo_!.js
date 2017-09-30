const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer(
    {
        template: require('fs').readFileSync('./index.template.html','utf-8')
    }
)

//
// const app = new Vue({
//     template: `<div>Hello World</div>`
// })
// 第 2 步：创建一个 renderer
// 第 3 步：将 Vue 实例渲染为 HTML
// renderer.renderToString(app,(err,html) => {
//     if (err) throw err
//     console.log(html)
//     // => <div data-server-rendered="true">Hello World</div>
// })
const context = {
    title: 'hello'
}

server.get('*',(req,res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>你好 {{ url }}</div>`
    })
    renderer.renderToString(app,context,(err,html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html)
    })
})
server.listen(7007)