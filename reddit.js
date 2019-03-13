const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

rp('https://reddit.com/r/popular.json').then(rawData => {
    let redditData = JSON.parse(rawData).data.children;

    let redditArray = redditData.map(article => {
        let info = article.data;
        return {
            title: info.title,
            url: info.url,
            author: info.author
        };
    });
    fs.writeFile(
        path.join(__dirname, './popular-articles.json'),
        JSON.stringify(redditArray, null, 2),
        err => {
            if (err) console.log(err);
        }
    );
});
