var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8888",
        "webpack/hot/only-dev-server",
        "./index.ts"
    ],
    output: {
        filename: 'dompark.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        port: 8888,
        hot: true,
        quiet: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),

        // 和上文 output 的“publicPath”值保持一致
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "../index.html"
        }),
        // 开启全局的模块热替换(HMR)
        new webpack.HotModuleReplacementPlugin(),

        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.NamedModulesPlugin(),
    ]
}