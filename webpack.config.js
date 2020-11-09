const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = { 
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'widget.js',
        library: ['MyLib'],
        libraryTarget: 'umd',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};