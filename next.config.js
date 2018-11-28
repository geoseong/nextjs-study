// build directory 변경하기
// module.exports = {
//   distDir: '../../tmp/.next'
// }

module.exports = (phase, {defaultConfig}) => {
  return {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      // XXX https://github.com/evanw/node-source-map-support/issues/155
      config.node = {
        fs: 'empty',
        module: "empty",
      };
      return config;
    },
  };
};