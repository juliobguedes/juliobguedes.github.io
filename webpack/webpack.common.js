const webpack = require("webpack");
const path = require("path");
const parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }, {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }, {
                test: /\.(png|jp(e*)g)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    outputPath: './images/',
                    name: '[hash]-[name].[ext]',
                },
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
};
