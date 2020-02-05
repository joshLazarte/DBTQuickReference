const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: [
          '@babel/polyfill',
          './public/js/src/main',
        ],
    },
    output: {
        path: path.resolve(__dirname, './public/js/dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }]
        }]
    },
    watchOptions: {
         ignored: /node_modules/,
    }
};