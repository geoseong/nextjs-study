const configuration = {
  exportPathMap: () => {
      return {"/": {page: "/"}};
  },
  webpack: (config) => {
      return config
  }
};

// module.exports = configuration;
if(process.env.IN_LAMBDA) {
 module.exports = configuration;
} else {
  const withOffline = require('next-offline');
  module.exports = withOffline(configuration);
}

// // changed build directory in Lambda bcz 
// module.exports = {
//   distDir: '../../tmp/.next'
// }
