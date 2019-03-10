const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
    },
    mode: 'development',
});
