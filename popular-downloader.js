const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

rp('https://reddit.com/r/popular.json').then(rawData => {
    let redditData = JSON.parse(rawData).data.children;

    redditData.forEach(article => {
        let info = article.data;
        let writeFileName = info.id + path.extname(info.url);
        if (
            path.extname(info.url) === '.jpg' ||
            path.extname(info.url) === '.gif' ||
            path.extname(info.url) === '.png'
        )
            return rp(info.url, { encoding: 'base64' }).then(media => {
                fs.writeFile(
                    path.join(__dirname, `./downloads/${writeFileName}`),
                    media,
                    { encoding: 'base64' },
                    err => {
                        if (err) console.log(err);
                    }
                );
            });
    });
});
