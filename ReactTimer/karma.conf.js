var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'script!jquery/dist/jquery.min.js',
            'script!foundation-sites/dist/foundation.min.js', 
            'app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
