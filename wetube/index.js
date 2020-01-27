//require : node module을 어딘가에서 가져옴 = express import 
// 1순위 : express 폴더를 찾고 
// 2순위 : node_modules 사이에서 찾음 
const express = require('express')

// app변수 안에 express를 실행해서 담음
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})