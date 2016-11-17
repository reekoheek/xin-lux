const webpack = require('webpack');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

console.error(`
  ENV ${ENV}
`);

function getPlugins () {
  let plugins = [];

  if (ENV === 'production') {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    );
  }

  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'xin',
    filename: ENV === 'production' ? 'xin.min.js' : 'xin.js',
  }));

  return plugins;
}

module.exports = {
  entry: {
    'lux-fastclick': './lux-fastclick.js',
    'lux-force-https': './lux-force-https.js',
    'lux-sw': './lux-sw.js',
    'lux-sw-cache': './lux-sw-cache.js',
    'lux-sw-fetch': './lux-sw-fetch.js',
    'lux-sw-importscript': './lux-sw-importscript.js',
    'lux-sw-offline-analytics': './lux-sw-offline-analytics.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: ENV === 'production' ? '[name].min.js' : '[name].js',
  },
  devtool: 'source-map',
  plugins: getPlugins(),
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /node_modules\/(xin|template-binding)/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
        ],
      },
      {
        test: /\.js$/,
        include: /(lux-[a-zA-Z-]+.js|node_modules\/(xin|template-binding))/,
        loader: require.resolve('babel-loader'),
        query: {
          presets: ['es2015', 'stage-3'],
          cacheDirectory: true,
        },
      },
    ],
  },
};
