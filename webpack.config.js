const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // очищает dist/ перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // обрабатывает CSS
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/i,
                type: 'asset/resource', // обрабатывает шрифты
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // будет скопирован в dist/
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
        open: true,
    },
};
