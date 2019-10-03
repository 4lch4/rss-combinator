const { FEED_URL } = require('./config')
const RParser = require('rss-parser')
const parser = new RParser()

parser.parseURL(FEED_URL).then(feed => {
  console.log(`feed.title = ${feed.title}`)
  console.log(`feed.description = ${feed.description}`)
  console.log(`feed.feedUrl = ${feed.feedUrl}`)
  console.log(`feed.link = ${feed.link}`)
  console.log(`feed.items...`)
  console.log(feed.items[0])
}).catch(console.error)
