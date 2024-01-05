const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    devServer: {
        static: "./dist",
    },
    devServer: {
        static: "./dist",
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};