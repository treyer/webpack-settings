const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          "sass-loader",
        ],
      },
    ],
  },
});
