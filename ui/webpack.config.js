const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const MODE = process.ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: MODE,
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      'app-history': path.resolve(__dirname, 'src/history'),
      'components': path.resolve(__dirname, 'src/components'),
      'styles-constants': path.resolve(__dirname, 'src/styles.constants'),
      'img': path.resolve(__dirname, 'public/img'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/mail.php', to: './' },
      ],
    }),
    new CleanWebpackPlugin(),
  ],

  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
}
