const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    port: 3020,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ecommerce Store',
            template: './public/index.html'
        })
    ]
}