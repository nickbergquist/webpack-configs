'use strict';

const common = require('./webpack.common.js');

const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


// Current: JS transpiled to es5, minified and no sourcemap created
//          CSS built, unminified and external sourcemap created

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
