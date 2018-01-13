module.exports = {
  devtool: 'eval-source-map',
  entry: `${__dirname}/client/index.jsx`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '127.0.0.1',
    port: '8080',
    contentBase: './public',
    historyApiFallback: true,
  },
};
