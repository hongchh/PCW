let express = require('express')
let path = require('path')
let history = require('connect-history-api-fallback')
let controller = require('./controller')

let app = express()

app.set('views', path.join(__dirname, 'views'))

app.use(history())
app.use('/static', express.static(path.join(__dirname, './static')))
app.use('/data/img', express.static(path.join(__dirname, './static/img')))
app.use('/data', express.static(path.join(__dirname, '../data')))
app.use('/', controller)

module.exports = app