const path = require('path');
const fs = require('fs');

const chirpPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        user: 'Heather',
        message: 'Good intentions pave the road to hell.'
    },
    {
        user: 'Kenneth',
        message: 'He who makes the gold makes the rules.'
    },
    {
        user: 'Caroline',
        message: "You can't drink all day if you don't start in the morning."
    },
    {
        user: 'Reid',
        message: 'I need time to chill.'
    },
    {
        user: 'Davis',
        message: 'If you fail to plan, you plan to fail'
    },
    {
        user: 'Ellie',
        message: 'Can I go???'
    }
];

fs.writeFile(chirpPath, JSON.stringify(chirps, null, 2), err => {
    if (err) console.log(err);
});

console.log('');
chirps.forEach(chirp => {
    console.log(`${chirp.user}`);
    console.log(`${chirp.message}`);
    console.log('');
});
