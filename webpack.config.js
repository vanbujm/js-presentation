const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // Default for boilerplate generation.
  output: {
    path: path.resolve('dist'),
    filename: 'deck.js',
  },
  devtool: 'source-map',
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.([jt])sx?$/,
        use: 'babel-loader',
      },
      // `.md` files are processed as pure text.
      {
        test: /\.md$/,
        use: ['raw-loader'],
      },
      // `.mdx` files go through babel and our mdx transforming loader.
      {
        test: /\.mdx$/,
        use: ['babel-loader', 'spectacle-mdx-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // Default for boilerplate generation.
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Spectacle presentation',
      template: './src/index.html',
    }),
  ],
};
