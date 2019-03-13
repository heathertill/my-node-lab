const rp = require('request-promise');

let redditPath = path.join(__dirname, 'popular-articles.json')

rp('https://reddit.com/r/popular.json')
   .then(rawArticles => {
      
      fs.writeFile(redditPath, rawArticles, (err) => {
         if (err) console.log(err);
      })
   })