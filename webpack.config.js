const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlwebpackplugin({
            template: path.join('./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
        
    ],
    module:{
        rules: [
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test:/\.js$/,use:['babel-loader'],exclude:[/node_modules/]},
            {test:/\.vue$/,use:['vue-loader']},
            {test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,use: 'file-loader'}
        
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'  //将runtime版本的vue.js转成功能全的vue.js
        }
    }
}