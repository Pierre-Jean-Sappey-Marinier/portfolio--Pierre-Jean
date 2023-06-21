module.exports = {
  basePath:
    process.env.NODE_ENV === 'production' ? '/portfolio--Pierre-Jean' : '',
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
