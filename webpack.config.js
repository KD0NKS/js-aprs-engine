const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                /*
                exclude: [
                    /node_modules/
                ]
                */
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                   'file-loader',
                ]
            }
        ]
    },
    externals: {
        'js-aprs-is': 'js-aprs-is',
        'js-aprs-fap': 'js-aprs-fap'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        mainFields: [ 'main', 'module' ],
        alias: {
            node_modules: path.join(__dirname, 'node_modules/js-aprs-is')
        }
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'jsaprsengine',
        libraryTarget: 'umd',
        globalObject: 'this'
    }
};