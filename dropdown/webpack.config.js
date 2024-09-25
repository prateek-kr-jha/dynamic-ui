const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'eval-source-map', // for proper error message
    devServer: {
        watchFiles: ['./src/template.html'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dropdown',
            filename: 'index.html',
            template: './src/template.html',
            inject: 'body',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
