var path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['to-string-loader', 'css-loader'],
          },
        ],
      },

};