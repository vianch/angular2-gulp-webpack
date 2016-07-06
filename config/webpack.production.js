const commonConfig = require('./webpack.config.js'); // the settings that are common to prod and dev
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = webpackMerge(commonConfig, {
    debug: false,

    devtool: null,

    plugins: [
        new UglifyJsPlugin({
            // beautify: true, //debug
            // mangle: false, //debug
            // dead_code: false, //debug
            // unused: false, //debug
            // deadCode: false, //debug
            // compress: {
            //   screw_ie8: true,
            //   keep_fnames: true,
            //   drop_debugger: false,
            //   dead_code: false,
            //   unused: false
            // }, // debug
            // comments: true, //debug


            beautify: false, //prod
            mangle: { screw_ie8 : true }, //prod
            compress: { screw_ie8: true }, //prod
            comments: false //prod
        })
    ]
});