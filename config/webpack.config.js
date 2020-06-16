/* common webpack confiuguration both for debug and build */

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
	resolve: {
		extensions: [ '.tsx', '.ts', '.js', '.json' ],
	},
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    target: "node-webkit",
    plugins: [
		new CopyPlugin({
		  patterns: [
			{ from: 'src/template-res', to: './' }
		  ],
		})
    ]
};