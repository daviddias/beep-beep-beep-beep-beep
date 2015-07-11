var fs = require('fs')

exports = module.exports = beepbeepbeep

function beepbeepbeep () {
  fs.createReadStream('/dev/random').pipe(process.stdout)
}
