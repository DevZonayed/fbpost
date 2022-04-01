const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : path.resolve(__dirname , 'src/index.js'),
    output : {
        path : path.resolve(__dirname , 'bundle'),
        filename : 'bundle.js',
        clean : true
    },
    devServer : {
        static : './bundle',
        port : 8080,
        open : true,
        hot : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.(css|scss)$/,
                use : ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebpack({
            template : path.resolve(__dirname , 'public/index.html'),
            filename : 'index.html',
            title : 'Facebook Post System'
        })
    ]
}