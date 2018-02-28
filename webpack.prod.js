'use strict';

const common = require('./webpack.common.js');

const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


// Current: JS transpiled to es5, minified and no sourcemap created
//          CSS built, vendor-prefixed, minified and no sourcemap created

// Required: JS transpiled to es5, minified and external sourcemap
//           CSS built, vendor-prefixed, minified and external sourcemap

const config = merge(common, {
    devtool: 'none',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});

module.exports = config;
