const configuration = {
  // exportPathMap: () => {
  //     return {"/": {page: "/"}};
  // },
  // webpack: (config) => {
  //     return config
  // },
  // distDir: '../../tmp/.next',
};

// module.exports = configuration;
console.log('\n---------[next.config.js/process.env.IN_LAMBDA]-----------\n', process.env.IN_LAMBDA, '\n--------------------\n')
console.log('\n---------[next.config.js/process.env.NODE_ENV]-----------\n', process.env.NODE_ENV, '\n--------------------\n')
// if(process.env.IN_LAMBDA) {
//   module.exports = configuration;
// } else {
  // const withOffline = require('next-offline');
//   module.exports = withOffline(configuration);
// }
