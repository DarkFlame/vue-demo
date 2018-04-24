
var babel = require('babel-core')
babel.transformFile("test.js", {
    // presets:['env',{
    //
    // }],
    "plugins": [
        ["transform-runtime", {
            "helpers": true,
            "polyfill": true,
            "regenerator": true,
            "moduleName": "babel-runtime"
        }]
    ]
}, function (err, result) {
   console.log(err)
   console.log(require('util').inspect(result.code,true,null,true))
});