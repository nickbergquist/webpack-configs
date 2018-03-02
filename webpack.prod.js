'use strict';

const common = require('./webpack.common.js');

const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


// Current: JS transpiled to es5, minified and no sourcemap created
//          CSS built, vendor-prefixed, minified and no sourcemap created

const config = merge(common, {
    devtool: 'none',  // 'source-map' usually recommended for production
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});

module.exports = config;
