module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dragon-u' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};
