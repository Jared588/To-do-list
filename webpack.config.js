const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
      index: './src/index.js',
      project: './src/project.js',
      todo: './src/todos.js',
      modal: './src/modal.js',
      form: './src/form.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'to-do-list',
          template: './src/index.html'
        }),
      ],
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
};