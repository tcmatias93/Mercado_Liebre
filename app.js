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

app.get('/register.html', function(req, res) {
    let register = path.resolve(publicPath + '/views/register.html')
    res.sendFile(register)
})

app.get('/login.html', function(req, res) {
    let login = path.resolve(publicPath + '/views/login.html')
    res.sendFile(login)
})