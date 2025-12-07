module.exports = {
  apps: [{
    name: 'endora-web',
    script: './node_modules/.bin/next',
    args: 'start',
    cwd: '/var/www/endora_web',
    node_args: '--max-old-space-size=512',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    max_memory_restart: '512M',
    autorestart: true,
    watch: false
  }]
}