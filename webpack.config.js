const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

if(process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: "img/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset"
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "works.html",
            template: "./src/works.html"
        }),
        new HtmlWebpackPlugin({
            filename: "articles/keane.html",
            template: "./src/articles/keane.html"
        }),
        new HtmlWebpackPlugin({
            filename: "articles/lscr.html",
            template: "./src/articles/lscr.html"
        }),
        new HtmlWebpackPlugin({
            filename: "articles/casa-flores.html",
            template: "./src/articles/casa-flores.html"
        }),
        new HtmlWebpackPlugin({
            filename: "articles/afaya.html",
            template: "./src/articles/afaya.html"
        }),
    ],
    resolve: {
        extensions: [".js"]
    },
    devtool: "source-map",
    devServer: {
        hot: true
    }
}