//require : node module을 어딘가에서 가져옴 = express import 
// 1순위 : express 폴더를 찾고 
// 2순위 : node_modules 사이에서 찾음 
const express = require('express')

// app변수 안에 express를 실행해서 담음
const app = express()

//localhost 4000port 부여. TERMINAL에서 node index.js 실행후 접속가능 
// 정상 실행시 : http://localhost:4000/으로 접속했을 때 Cannot GET /이라고 뜸
// Cannot GET / : 루트(/)에 표시할 게 없음
app.listen(4000);

// 매번 index.js로 실행하고 싶지 않아서 
// package.json을 중앙 컨트롤 타워처럼 만듬