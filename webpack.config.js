const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "svg-loader",
        }
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: {
          loader: "css-loader",
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
        }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"), // Serve files from this directory
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
};