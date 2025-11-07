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
            use: {
                loader: 'babel-loader',
            },
        }, {
            test: /\.(less|css)$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        }, {
            test: /\.(png|jp(e*)g)$/,
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 8000,
                },
            },
            generator: {
                filename: 'images/[hash]-[name][ext]',
            },
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name][ext]',
            },
        }],
    },
    output: {
        path: `${parentDir}/`,
        filename: 'bundle.js',
        clean: false,
    },
    plugins: [htmlWB],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
