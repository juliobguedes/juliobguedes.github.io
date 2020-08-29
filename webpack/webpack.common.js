const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parentDir = path.join(__dirname, '../');
const htmlWB = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
});

module.exports = {
    entry: [
        path.join(parentDir, 'index.js'),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.(less|css)$/,
            loaders: ['style-loader', 'css-loader', 'less-loader'],
        }, {
            test: /\.(png|jp(e*)g)$/,
            loader: 'url-loader',
            options: {
                limit: 8000,
                outputPath: './images/',
                name: '[hash]-[name].[ext]',
            },
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                },
            }],
        }],
    },
    output: {
        path: `${parentDir}/`,
        filename: 'bundle.js',
    },
    plugins: [htmlWB],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
