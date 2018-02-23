'use strict';

const common = require('./webpack.common.js');

const merge = require('webpack-merge');


// Current: JS transpiled to es5 and inline sourcemap created
//          CSS built, unminified and inline sourcemap created

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: './dist',
        stats: 'errors-only'
    } 
});
