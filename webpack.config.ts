import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: webpack.Configuration = {
  mode: 'production',

  resolve:{
    alias: {
      "@root":  path.resolve(__dirname, 'src/'),
      "@pages": path.resolve(__dirname, 'src/pages/'),
      "@config": path.resolve(__dirname, 'configs/'),
      "@components": path.resolve(__dirname, 'src/components/'),
      "@theme": path.resolve(__dirname, 'src/theme/'),
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: {
    app: ['./src/Index.tsx', "./src/Index.scss"],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  externals:{
    react: "React",
  },
  devServer: {
    port: 3333,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      overlay: false,
    },
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
  ]
};

export default config;