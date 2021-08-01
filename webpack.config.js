const path = require('path');

module.exports = {
    entry: './react/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};
