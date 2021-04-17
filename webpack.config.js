var path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  WriteFilePlugin = require("write-file-webpack-plugin"),
  MergeIntoSingleFilePlugin = require("webpack-merge-and-include-globally");

var options = {
  mode: "development",
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/manifest.json",
        transform: function (content, path) {
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
    new MergeIntoSingleFilePlugin({
      files: {
        "popup.js": [
          path.join(__dirname, "src", "js", "config.js"),
          path.join(__dirname, "src", "js", "common", "constants.js"),
          path.join(__dirname, "src", "js", "common", "context.js"),
          path.join(__dirname, "src", "js", "popup.js"),
        ],
        "content-script.js": [
          path.join(__dirname, "src", "js", "config.js"),
          path.join(__dirname, "src", "js", "common", "constants.js"),
          path.join(__dirname, "src", "js", "common", "context.js"),
          path.join(__dirname, "src", "js", "content-script.js"),
        ],
        "service-worker.js": [
          path.join(__dirname, "src", "js", "config.js"),
          path.join(__dirname, "src", "js", "common", "constants.js"),
          path.join(__dirname, "src", "js", "common", "context.js"),
          path.join(__dirname, "src", "js", "service-worker.js"),
        ],
      },
    }),
    new WriteFilePlugin(),
  ],
};

module.exports = options;
