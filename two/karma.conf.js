// Karma configuration
// Generated on Sat Aug 16 2014 15:09:33 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // we set the base path to our directory root. This means all files will
    // be loaded relative to the root directory
    basePath: '',


    // we use mocha, it's autoloaded by karma
    frameworks: ['mocha'],


    // load our source and test files, they will be loaded in order.
    files: [
        "node_modules/chai/chai.js",
        "src/vendor/angular/angular.js",
        "src/vendor/angular-mocks/angular-mocks.js",
        "src/js/app.js",
        "tests/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
