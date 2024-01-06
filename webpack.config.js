const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
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
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
};