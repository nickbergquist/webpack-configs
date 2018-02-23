'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['./app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/assets/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {loader: 'css-loader', options: {sourceMap: true}},
                        {loader: 'resolve-url-loader', options: {sourceMap: true}},
                        {loader: 'sass-loader', options: {sourceMap: true}}
                    ],
                    fallback: 'style-loader'
                  })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015'].map(require.resolve)
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({ template: 'index.html' })
    ],
    devServer: {
        open: true,
        contentBase: __dirname + '/src',
        stats: 'errors-only'
    },
    devtool: 'inline-source-map'
};

console.log('NODE_ENV : ' + process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') {
    
    // change sourcemap type
    config.devtool = 'source-map';

    // any other production mode requirements
}

module.exports = config;
