const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index',
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ["syntax-dynamic-import"],
            presets: [
              ['env', {
                targets: {
                  browsers: ['Chrome >= 60']
                }
              }]
            ]
          }
        }
      }
    ]
  }
};
