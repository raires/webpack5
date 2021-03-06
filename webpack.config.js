const HTMLwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: 'index.html'
        })
    ]
}