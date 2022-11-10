var express = require('express');
const app = express();
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')
const curse = require('./curse')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', users)
app.use('/curse', curse)

app.listen(port, () => {
    console.log(' Server Rodando!')
})
