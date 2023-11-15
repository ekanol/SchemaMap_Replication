
require('node-env-file')('.env');


console.log("Compiling JavaScript using question ID of %s", process.env.QUESTION_ID);
console.log("Saving answers to %s", process.env.QUESTION_NAME);

var webpack = require('webpack');

module.exports = {
    // Updated devtool format
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.QUESTION_ID': JSON.stringify(process.env.QUESTION_ID),
            'process.env.QUESTION_NAME': JSON.stringify(process.env.QUESTION_NAME),
            'process.env.CHOICES_KEY': JSON.stringify(process.env.CHOICES_KEY)
            // Add other environment variables here if needed
        }),
        // ... any other plugins ...
    ],
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    resolve: {
        extensions: ['.js', '.json', '.yml', '.yaml', '.csv'],
        // Updated 'modulesDirectories' to 'modules'
        modules: ['web_modules', 'node_modules', 'src', 'data']
    },

    module: {
        // Updated 'loaders' to 'rules'
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Updated Babel options to use presets/plugins as 'stage' and 'optional' have been removed in Babel 7
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.ya*ml$/,
                use: 'yaml-loader'
            }
        ]
    }
};
