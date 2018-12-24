const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    mode: 'development'
});
