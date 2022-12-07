const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        script: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: '[name].js',
    },
}