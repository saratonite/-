const screenShot = require('./lib/screenshot')
const fs = require('fs');
screenShot('https://hackernoon.com/efficiently-snapshotting-spas-with-puppeteer-c4c77aa2831b').then((screen) => {
    console.log(screen)
    let writeStream = fs.createWriteStream('secret.png')
    writeStream.write(screen)
    
}
)
.catch(err => console.log('ERRRRRRRRORRR___', err))