const path = require("path");

const conf = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		overlay: true
	}
};

module.exports = conf;