const port = 8080
const compression = require('compression')
const express = require('express')
const path = require('path')

let app = express()

app.use(compression())
app.use('/pathophysiology', express.static(path.join(__dirname, './pathophysiology')))
app.listen(port)

console.log('http://localhost:' + port)
