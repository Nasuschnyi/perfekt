export default {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		config.module.rules.push({
			test: /\.module\.css$/,
			use: [
				defaultLoaders.babel,
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true,
					},
				},
			],
		});

		return config;
	},
};
