const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // dev-server
const CopyWebpackPLugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = ({ mode }) => {
  return {
    mode,
    entry: "./src/app.js",
    output: {
      filename: "app.js",
      path: path.resolve(__dirname, "dist"),
    },

    // debut dev-server
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      //fin dev-server
      new CopyWebpackPLugin(
        [
          { from: "src/images", to: "images" },
          { from: "./src/index.html", to: "index.html" },
          { from: "./src/manifest.json", to: "manifest.json" },
          { from: "./src/images/", to: "images" },
        ],
        { ignore: [".DS_Store"] }
      ),
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: "./src/src-sw.js",
        swDest: "sw.js",
      }),
    ],
    // debut dev-server
    devtool: mode === "developement" ? "source-map" : "none",
    //fin dev-server
  };
};
