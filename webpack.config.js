const webpack = require("webpack");
const path = require("path");

let config = {
  entry: "./src/index.js",
  target : 'node',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "./app.js"
  }
}

module.exports = config;
