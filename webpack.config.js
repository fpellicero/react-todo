var path = require('path');

module.exports = {
    context: path.join(__dirname, 'js'),
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, 'js/build'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
              test: /\.jsx$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  plugins: ['transform-runtime'],
                  presets: ['es2015', 'react']
              }
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  plugins: [require.resolve('babel-plugin-transform-runtime'), require.resolve("babel-plugin-transform-object-rest-spread")],
                  presets: [require.resolve('babel-preset-es2015')]
              }
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom' : 'ReactDOM'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
