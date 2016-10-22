/* eslint global-require: 0 */

require("dotenv").config({ silent: true });

const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: [
    path.resolve("src/index.tsx"),
  ],

  output: {
    path: path.resolve("build"),
    filename: "app.[hash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
    alias: {
      src: path.resolve(__dirname, "../src"),
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
    }),
  ],

  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "babel!ts" },
    ],
  },

  postcss() {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-nested")(),
      // add your "plugins" here
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ];
  },
};

module.exports = config;
