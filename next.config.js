module.exports = {
  // experimental: {
  //   outputFileTracingExcludes: {
  //     // '/api/hello': ['./un-necessary-folder/**/*'],
  //   },
  //   outputFileTracingIncludes: {
  //     '/_assets': ['./_assets/**/*'],
  //   },
  // },
  output: 'export',
  distDir: 'dist',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.jsx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// git add dist && git commit -m "Initial dist subtree commit"
// git subtree push --prefix dist origin gh-pages
