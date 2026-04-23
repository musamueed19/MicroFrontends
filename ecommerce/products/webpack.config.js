import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: 'development',
    devServer: {
        port: 8090
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Products List',
            template: './public/index.html'
        })
    ]
}