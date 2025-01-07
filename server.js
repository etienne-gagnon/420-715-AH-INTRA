const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(7777);

console.log('Le server est ouvert : http://localhost:7777');