module.exports = {
  apps: [
    {
      name: 'dragon:ui',
      script: './ui.server.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
