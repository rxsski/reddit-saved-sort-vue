const path = require( 'path' );
const ExtractTextWebpackPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  entry: [ './src/main.js', './src/styles.scss' ],
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:{ 
          loader: 'vue-loader',
          options: { loaders: { js: 'babel-loader' } }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ] //End Rules
  },
  plugins: [
    new ExtractTextWebpackPlugin( 'styles.css' )
  ],
  devServer: {
    contentBase: path.resolve( __dirname, './public' )
  },
  devtool: 'eval-source-map'
}