var webpack           = require("webpack");
var path              = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: [
    path.resolve("src/index.ts"),
  ],

  output: {
    path: path.resolve("build"),
    filename: "app.js",
  },

  resolve: {
    extensions: ["", ".js", ".ts", ".tsx"],
    alias: {
      "app": path.resolve("src"),
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
    }),
  ],

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts" },
    ],
  },

  postcss: function () {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-nested")(),
      // add your "plugins" here
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ];
  }
};

module.exports = config;
