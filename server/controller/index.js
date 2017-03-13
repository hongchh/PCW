let index = require('express').Router()
let html = require('fs').readFileSync(__dirname + '/../views/index.html')

index.get('*', (req, res) => {
  res.status(200).end(html)
})

module.exports = index