const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;

const scssRule = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      'sass-loader'
    ]
  })
};

const jsRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
};

const config = {
  entry: {
    vendor: ['react', 'react-dom', 'core-js/modules/es6.promise', 'core-js/modules/es6.array.iterator'],
    app: ['./src/App.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'js/[name].chunk.[hash].js',
    filename: 'js/[name].bundle.[hash].js'
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  devtool: 'none',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.css', '.scss']
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
      scssRule,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        })
      },
      jsRule
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new ExtractTextPlugin({ filename: 'css/styles.css', allChunks: true, disable: env === 'dev' }),
    new webpack.HashedModuleIdsPlugin()
  ]
};

if (env === 'dev') {
  config.module.rules.push({ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' });
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  scssRule.use = ['css-hot-loader'].concat(scssRule.use);

  config.devtool = 'source-map';
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true
  };
}

module.exports = config;
