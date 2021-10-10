module.exports = {
  configureWebpack: {
    test: /\.(png|jpg|svg)$/,
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "images/",
    },
  },
}
