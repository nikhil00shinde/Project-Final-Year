const handwritten = require('handwritten.js')
const fs = require('fs')
const rawtext = "Hello, world!"
handwritten(rawtext, { ruled: true }).then((converted) => {
    converted.pipe(fs.createWriteStream('output.pdf'))
})