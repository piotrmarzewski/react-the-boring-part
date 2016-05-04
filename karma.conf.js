// Karma configuration

var webpackConfig = require("./webpack/webpack.prod.config.js");
webpackConfig.devtool = "inline-source-map";
webpackConfig.module.loaders = [
  ...webpackConfig.module.loaders,
  { test: /\.js$/, exclude: [/node_modules/, /\.spec.js$/], loader: "babel-istanbul" },
];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],


    // list of files / patterns to load in the browser
    files: [
      "src/**/*.spec.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.spec.js": ["webpack", "sourcemap"]
    },


    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha", "notify", "coverage"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    // Webpack configuration
    webpack: webpackConfig,


    // Webpack middleware configuration
    webpackMiddleware: {
      noInfo: true
    },

    // karma-notify-reporter settings
    notifyReporter: {
      reportEachFailure: true
    },

    coverageReporter: {
      type: "text"
    }
  })
}
