'use strict';

const common = require('./webpack.common.js');

const merge = require('webpack-merge');


// Current: JS transpiled to es5 and inline sourcemap created. Changes to JS are
//          reflected in live reload via webpack-dev-server.
//          CSS built, vendor-prefixed, minified and inline sourcemap created, 
//          mapped back to SCSS files.


const config = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: './dist',
        stats: 'errors-only'
    } 
});

module.exports = config;
