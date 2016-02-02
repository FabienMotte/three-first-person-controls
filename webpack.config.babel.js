import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

// Package.json
import packageConfig from './package';
const { name: libraryName, entry: libraryEntry } = packageConfig.library;

// Environment variable
const env = process.env.NODE_ENV || 'production';
const PROD = env === 'production';

// Configuration
let outputName;
const outputPath = path.resolve( __dirname, 'lib' );
const plugins = [];

if ( PROD ) {
  plugins.push( new webpack.optimize.UglifyJsPlugin( { minimize: true, sourceMap: false, compress: { warnings: false } } ) );
  outputName = `${libraryName}.min.js`;
} else {
  plugins.push( new CleanWebpackPlugin( [outputPath] ) );
  outputName = `${libraryName}.js`;
}

export default {
  entry: libraryEntry,
  devtool: 'source-map',
  output: {
    path: outputPath,
    library: libraryName,
    filename: outputName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'three': 'three'
  },
  resolve: {
    root: path.resolve( 'src' ),
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory',
        include: path.resolve( 'src' )
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: path.resolve( 'src' )
      }
    ]
  },
  plugins
};