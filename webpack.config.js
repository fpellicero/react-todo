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
