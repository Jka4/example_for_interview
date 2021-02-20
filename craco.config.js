const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, './src/Components/'),
      '@Actions': path.resolve(__dirname, './src/Actions/'),
      '@Store': path.resolve(__dirname, './src/Store/store/'),
      '@Utils': path.resolve(__dirname, './src/utils'),
    },
  },
};
