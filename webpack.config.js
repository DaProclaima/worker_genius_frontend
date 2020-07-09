const path = require('path')

module.exports = {
  node: {
    fs: "empty"
  },
  "externals": {
    "axios": "require('axios')",
    "socket": "require('socket.io')"
  },
  entry: path.resolve(__dirname, './dist/main.js'),
  output: {
    path: path.resolve(__dirname,'assets/javascripts/javascripts/'),
    filename: 'main.js'
  }
}
