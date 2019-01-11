const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV;

const getPlugins = env => {
  const plugins = [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })];
  if (env === 'dev') plugins.push(new webpack.HotModuleReplacementPlugin());

  return plugins;
};

const getRules = env => {
  const rules = [{ test: /\.(ts|tsx)$/, loader: 'ts-loader' }];
  if (env === 'dev') rules.push({ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' });

  return rules;
};

const config = {
  entry: {
    app: ['./src/App.tsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'none',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: { rules: getRules(env) },
  plugins: getPlugins(env)
};

if (env === 'dev') {
  config.devtool = 'source-map';
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true
  };
}

module.exports = config;
