const path = require('path');

module.exports = {
    entry: './index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                   'file-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts' ],
        mainFields: [ 'main', 'module' ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'jsaprsengine',
        libraryTarget: 'umd'
    }
};