var webpack = require("webpack"),
  path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  WriteFilePlugin = require("write-file-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

var options = {
  entry: {
    popup: path.join(__dirname, "src", "js", "popup.js"),
    "content-script": path.join(__dirname, "src", "js", "content-script.js"),
    "service-worker": path.join(__dirname, "src", "js", "service-worker.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "src", "manifest.json"),
        transform: function (content) {
          return Buffer.from(
            JSON.stringify({
              name: process.env.npm_package_name,
              author: process.env.npm_package_author_name,
              description: process.env.npm_package_description,
              version: process.env.npm_package_version,
              ...JSON.parse(content.toString()),
            })
          );
        },
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "popup.html"),
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WriteFilePlugin(),
  ],
};

module.exports = options;
