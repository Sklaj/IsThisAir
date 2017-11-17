//Konfiguracja Webpack
const path = require('path');

module.exports = {
  entry: './js/index.jsx',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'js'),
  },
  devServer: {
    inline: true,
    contentBase:'./',
    port: 3001
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','stage-2']
          }
        }
      }
    ],
  }
}
