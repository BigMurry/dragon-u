module.exports = {
  apps: [
    {
      name: 'dragon:ui',
      script: 'ui.server.js',
      max_memory_restart: '150M',
      env: {
        PORT: 8001,
        NODE_ENV: 'production'
      }
    }
  ]
};
