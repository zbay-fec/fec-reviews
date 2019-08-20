module.exports = {
    apps: [{
      name: 'reviews',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-191-134-3.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/tutorial.pem',
        ref: 'origin/master',
        repo: 'git@github.com:zbay-fec/fec-reviews.git',
        path: '/home/ubuntu/fec-reviews',
        'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }

  