import { resolve } from "path";
import { HotModuleReplacementPlugin } from "webpack";
import MiniCssExtractPlugin, { loader as _loader } from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const mode = "development";
export const entry = ["./index.js"];
export const output = {
  path: resolve(__dirname, "../static"),
  filename: "bundle.js",
  publicPath: "/static/",
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["react-refresh/babel"],
      },
    },
    {
      test: /\.css$/,
      use: [_loader, "css-loader"],
    },
    {
      test: /\.svg$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[name]_[local]_[hash:base64]",
            sourceMap: true,
            minimize: true
          }
        }
      ],
    },
  ],
};
export const plugins = [
  new MiniCssExtractPlugin({
    filename: `bundle.css`,
  }),
  new HotModuleReplacementPlugin(),
  new ReactRefreshWebpackPlugin({
    overlay: {
      sockPort: 8090,
    },
  }),
];
export const devServer = {
  port: 8090,
  hotOnly: true,
  writeToDisk: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  },
};