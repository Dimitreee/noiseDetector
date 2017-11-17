const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlPlugin = new HtmlWebpackPlugin({
    title: 'Osom Game - reborn',
    template: 'src/index.html'
});

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            }
        ],
        loaders: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'file?name=app/generated/[name].[ext]'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 8080,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        HtmlPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};