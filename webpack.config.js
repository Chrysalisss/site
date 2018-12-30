const path = require('path');

const config = {
  entry: './pathHere.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pathHere.js'
  }
};

module.exports = config