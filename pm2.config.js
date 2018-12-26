module.exports = {
  apps: [
    {
      name: 'dice:ui',
      script: './ui.server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
