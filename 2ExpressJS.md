0<br/>
Express.js : Node.js를 위한 웹 프레임워크. 매우 안정적.<br/>
소프트웨어적인 서버 : 인터넷에 연결된 한 덩어리의 코드<br/>
<br/>
2.1<br/>
Express.js를 이용하면 : 몇줄의 코드를 이용해서 서버를 만들 수 있음.<br/>
<br/>

2.2 프로젝트 폴더 생성<br/>
> ~/Documents(문서)폴더 하위에 프로젝트 폴더 생성 `mkdir wetube`<br/>
> wetude폴더 안에 index.js 생성<br/>
> www.npmjs.com에서 <br/>
> (vscode TERMINAL에서 `npm init` <br/>
> packageName : wetube<br/>
> version : 1.0.0<br/>
> description : Cloning Youtube<br/>
> 그외 : 넘어가도 됨<br/>
> Is this OK? : yes <br/>
> package.json이 생성됨 -> "script" : ... 은 삭제 <br/>
> `npm install express` -> node_modules폴더랑 package-lock.json이 설치됨 
<br/>
 /Documents(문서)폴더 하위에 프로젝트 폴더 생성<br/>
 `mkdir wetube` <br/>
 `cd wetube` <br/>
wetube 폴더 안에 index.js 파일 생성<br/>
(node 실행방법 : vscode TERMINAL창에 명령어 치면 됨) 
 `node index.js` <br/>
<br/>
<br/>
express로 나만의 서버를 만들고 싶다 -> NPMjs설치<br/>
NPM : Node Package Manager. 패키지 개발자들이 각자의 javascript 패키지를 넣어두면 다운로드, 업데이트 등의 관리를 한번에 할 수 있음. <br/>
node.js를 설치하면 npm도 같이 설치됨<br/>
`npm init` : npm이 정한 방식으로 프로젝트 시작 -> 프로젝트 이름을 알려달라고 함 = 내 웹사이트가 package임 <br/>
_(express 설치)_<br/>
* 주의사항: npm을 설치할때는 꼭 package.json이 있는 프로젝트 폴더에서 설치해야 함<br/>
<br/>
(Tip) npm 프로젝트를 전달할 때 js파일과 package.json만 전달해도됨 (node_modules폴더와 package-lock.json 파일 삭제하고)<br/>
해당 파일을 전달받아서 `npm install`만 입력하면 package.json에 있는 "dependencies" 항목을 찾아서 알아서 설치함
<br/>
<br/>
2.3 Your First Express Server <br/>
> node_modules에서 express를 import한 후,express를 호출하고 실행 -> 이렇게 app을 만듬 <br/>
> application에 4000번 포트를 listen함 <br/>
> 그다음 listening하기 시작할 때 handleListening이라는 함수를 호출함 <br/>

.gitignore 생성 : node_modules 추가<br/>
https://github.com/nodejs/node 에서 node .gitignore 공식파일을 볼 수 있음<br/>
https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore : node git ignore 내용 <br/>
gitignore에 package-lock.json도 추가  <br/>
readme.md파일 생성 <br/>

http://expressjs.com/en/guide 로 이동<br/>
index.js 에 routing guide복사 붙여넣기 <br/>
```const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
```


package.json에 아래내용 추가 후 TERMINAL에서 바로 npm start로 명령 실행가능
```
"scripts": {
    "start": "node index.js"
  }
``` 
<br/>
2.5 ES6 on NodeJS using Babel <br/>
Babeljs.io : 최신의 JS코드를 아주 무난한 예전의 JavaScript 코드로 변환해준다 <br/>
다양한 방법으로 사용 가능한데 nodeJs에서도 사용가능하다<br/>
VSC 콘솔에서 `npm install @babel/node`




  
