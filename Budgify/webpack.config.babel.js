const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const fs = require('file-system');

// BACK
const backConfig = {
    target: "node",
    entry:  ["babel-polyfill", "./src/server/test.js"],
    devServer: {
        contentBase: './dist/build'
    },
    output: {
        path: path.resolve(__dirname, "./dist/build"),
        filename: "bundle-back.js"
    },
    externals: [nodeExternals(), ".es6", ".es", ".jsx", ".js"],
    module: {
        rules: [
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        "presets": ["env"]
                    }
                }
            }
        ]
    }
};


// FRONT 
frontConfig = {
    entry: ['babel-polyfill', './src/client/index.js'],
    output: {
        path: path.resolve(__dirname, './dist/build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist/build'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '_Layout.cshtml',
            template: './Views/Shared/_Layout.cshtml'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

module.exports = frontConfig;