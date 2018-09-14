const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use:{
                loader: 'babel-loader',
                options: {
                  // This is a feature of `babel-loader` for webpack (not Babel itself).
                  // It enables caching results in ./node_modules/.cache/babel-loader/
                  // directory for faster rebuilds.
                  cacheDirectory: true,
                  plugins: ['react-hot-loader/babel'],
                },
            }
           
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(['dist']), //清理dist旧的build文件
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        // host:'localhost',
        // port:'8080',
        // open:true,//自动拉起浏览器
        hot: true //热加载
    },
};