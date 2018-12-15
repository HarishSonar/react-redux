const path = require('path');
var APP_DIR = path.resolve(__dirname, './src/app');

module.exports = {
    entry: [path.resolve('./lib/app/index.js')],
    output: {
        filename: "bundle.js"
    },
    watch: false,
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]  
            }
        ]
    }
}