const path = require('path')
let ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devtool: '#source-map',
    entry: {
        app: ['babel-polyfill','./main.js'],
        vendor: [
            'vue',
            'vue-router',
            'vuex',

        ]
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        // publicPath: '',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        })
    ]
}
