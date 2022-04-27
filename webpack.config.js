const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,

  // entry: './src/index.js',

  //   entry: {
  //       main: './src/index.js'         //for multiple entry points
  //   },

  output: {
    //   filename: 'bundle.js',

    //   filename: '[name].js',        //for multiple bundles for each entry

    //   path: path.resolve(__dirname, public)
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: "asset", // asset/resource, asset/inline
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // references .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "WebPack Tutorial",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",

  devServer: {
    static: "./dist",
    hot: true, // preserves manual DOM changes(LOGS) done in dev tools
  },
};
