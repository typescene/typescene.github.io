const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "index.ts"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "../../assets/docwidget")
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};
