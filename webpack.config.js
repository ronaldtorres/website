module.exports = {
  entry: "./webpack/index.js",
  output: {
    path: __dirname + "/assets/js",
    filename: "bundle.js"
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: "babel-loader",
      query: {
        presets: ["react", "es2015"]
      }
    }
    ]
  }
};