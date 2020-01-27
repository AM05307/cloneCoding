//require : node module을 어딘가에서 가져옴
const express = require('express')

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})