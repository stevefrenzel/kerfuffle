const path = require('path');

module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};
