const { error } = require('console');
const fs = require('fs');

const readStream = fs.createReadStream('../../powder-day.mp4');

readStream.on('data', (chunk) => {
    console.log('size: ', chunk.length);
})

readStream.on('end', () => console.log('Finshed'))

readStream.on('error', (error) => {
    console.log('Error occured: ', error)
})