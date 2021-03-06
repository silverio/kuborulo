module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  
  entry: ['babel-polyfill', './spec/index.js'],
  
  output: { 
    path: __dirname, 
    filename: 'dist/spec.js' 
  },
  
  
  stats: {
    colors: true,
    reasons: true
  },
  
  devServer: {
    inline: true
  },

  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: 'json' 
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      } 
    ]
  },
};
