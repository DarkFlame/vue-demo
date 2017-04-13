const path = require('path')
let ChunkManifestPlugin = require("chunk-manifest-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
let webpack = require("webpack")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let cssExtract = new ExtractTextPlugin({
    filename: 'css/main.css',
    allChunks: true
})
let docsExtract = new ExtractTextPlugin({
    filename: 'api.md',
    allChunks: true
})
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: ['babel-polyfill','./main.js'],
        vendor: [
            'vue',
            'vue-router',
            'vuex'
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
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: cssExtract.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        less: cssExtract.extract({
                            use: 'css-loader!less-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        css: cssExtract.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        docs: docsExtract.extract({
                            use: 'raw-loader'
                        }),
                    }
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
        cssExtract,
        docsExtract,
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
