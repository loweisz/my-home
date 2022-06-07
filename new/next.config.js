module.exports = {
  compiler: {
    styledComponents: true,
  },
  // images: {
  //   loader: 'custom',
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
