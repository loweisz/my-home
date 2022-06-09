module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
