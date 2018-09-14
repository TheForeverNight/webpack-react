npx webpack              //默认找到src/index.js编译生成dist下main.js
html-webpack-plugin      //生成新的html文件代替旧的html文件
clean-webpack-plugin     //清理dist旧的build文件(html，js)，需配合HtmlWebpackPlugin使用,不然dist下会缺失html文件
devtool: 'cheap-module-eval-source-map',//追踪错误和警告，开发环境下此配置选项速度较快
webpack-dev-server       //在package.json的scripts中配置"xxxx":"webpack-dev-server --open", 
