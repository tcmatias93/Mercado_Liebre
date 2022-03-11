const express = require('express');
const app = express()
const path = require('path')

app.use(express.static('public'))

const publicPath = path.resolve(__dirname)
app.use(express.static(publicPath))

app.listen(3001, () => console.log('Puerto 3001 corriendo'));

app.get('/', function(req, res) {
    let html = path.resolve(publicPath + '/views/index.html')
    res.sendFile(html)
})