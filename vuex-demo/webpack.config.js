const path = require('path')
let ChunkManifestPlugin = require("chunk-manifest-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
let webpack = require("webpack") 
let HtmlWebpackPlugin = require("html-webpack-plugin") 
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: ['babel-polyfill','./main.js'],
        vendor: [
            'vue',
            'vue-router',
            'vuex'
        ],
        // hot:['webpack-dev-server/client']
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        // publicPath: '',
        filename: '[name].[hash].js'
    },
    // devServer: {
    //     hot: true,
    //     // enable HMR on the server
    //
    //     contentBase: resolve(__dirname,'dist'),
    //     // match the output path
    //
    //     publicPath: '/'
    //     // match the output `publicPath`
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:'vue-style-loader!css-loader!'
                }
            }
        ]
    },
    performance: {
        // hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./index.html'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor","manifest"],
            minChunks: Infinity,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestletiable: "webpackManifest"
        })
    ]
}
