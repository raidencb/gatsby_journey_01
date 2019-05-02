const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'src',
  {
  	remote:'hub_page',
    branch: 'master',
    repo: 'https://github.com/raidencb/gatsby-deploy.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)