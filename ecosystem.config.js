module.exports = {
    apps: [{
      name: 'reviews',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'http://ec2-52-14-126-73.us-east-2.compute.amazonaws.com/',
        key: '~/.ssh/tutorial.pem',
        ref: 'origin/master',
        repo: 'git@github.com:zbay-fec/fec-reviews.git',
        path: '/home/ubuntu/tutorial',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }