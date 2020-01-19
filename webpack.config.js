const path = require('path'),
output_frontend =       __dirname+"/frontend";


module.exports = {
  entry: './frontend/src/core.js',
  output: {
    path: path.resolve(output_frontend, 'dist'),
    filename: 'bundle.js'
  }
};