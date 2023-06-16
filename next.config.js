module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.jsx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
