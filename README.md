npx webpack 默认找到src/index.js编译生成dist下main.js



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),      //生成新的html文件代替旧的html文件
        new CleanWebpackPlugin(['dist'])//清理dist旧的build文件(html，js)，需配合HtmlWebpackPlugin使用,不然dist下会缺失html文件
    ],
    devtool: 'cheap-module-eval-source-map',//追踪错误和警告，开发环境下此配置选项速度较快
    devServer: {
        contentBase: './dist'
    },//需npm install --save-dev webpack-dev-server进行安装，在package.json的scripts中配置                                      "xxxx":"webpack-dev-server --open", 
};