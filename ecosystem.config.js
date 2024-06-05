module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3013',
      instances: 1, // 使用多核模式，可以设置为1以使用单一实例
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
