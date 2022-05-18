const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Where files should be sent once they are bundled
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    port: 3000,
    proxy: {
      secure: false,
      '/user/*': 'http://localhost:3001',
    },
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ['babel-loader', 'ts-loader'],
        include: /src/,
        exclude: /node_modules/,
      },
      {
        test: /\.js(x?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.mjs', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development'),
    }),
  ],
};
