const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open:false,
        hot: true //热加载
    },
});