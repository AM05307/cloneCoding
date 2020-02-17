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
Babel에는 많은 스테이지가 있는데 env: 최신, stage-0: 실험적, stage-3 : 브라우저에서 반만 받아들여짐<br/>
VSC 콘솔에서 `npm install --save-dev @babel/preset-env`<br/>
`.babelrc` 파일생성 후 node.js와 JS와 관련된 설정 진행<br/> 
`npm install @babel/core`<br/> 
<br/> 
코드를 바꿨을때 서버를 재부팅하지 않아도 적용되도록 nodemon 설치 <br/>
VSC 콘솔 : `npm nodemon`<br/>
<br/>
package랑 dependency랑 별개로 설치하는 방법<br/>
dependency : 내 프로젝트가 실행될 때 필요한 것<br/>
dependency와는 별개로 프로그래머가 편하려고 설치할때는 npm install 명령 맨 뒤에 -D를 붙이면 됨<br/>
`npm install nodemon -D`

# 2.6

이슈 : 시작할때마다 서버가 2번 재부팅됨.  서버가 한번 실행되고, 바벨이 코드변경을 감지해서 재실행함<br/>

package.json<br/>

`--delay 2`  추가  : 저장할때마다 2초를 기다려주는데 그러면  babel이 변환을 완료할때까지 기다려줌 <br/>

express 에서의 미들웨어 : 처리가 끝날때까지 연결되어 있음<br/>

express에서의 모든 함수는 middleware가 될 수 있음 <br/>

express의 모든 route와 그런 것들은 connection을 다루는 건 : request, response, next를 가지고 있음.<br/> 

next : 다음 함수를 실행할 수 있는 권한 <br/>

미들웨어는 여러층을 가지고 있음.  양파의 가장 마지막함수가 유저한테 return.<br/>

반활할게 없으면 계속 로딩만 함.<br/>

미들웨어는 원하는 만큼 설정가능<br/> 

ex. 유저의 로그인 여부 체크. 파일 전송시 중간에서 가로채서 다른곳으로 upload 가능.  모든 접속에 대한 로그 작성, ip주소 체크 - 특정 ip 주소 차단 및 접속취소<br/>

우선 어떻게 연결이 시작되는가 : <br/>

브라우저에서 request 시작 > index.js 파일 실행 > application이 route가 존재하는지 살펴봄<br/>

---
# 2.7 미들웨어 여러개 설치

morgan  : logging에 도움을 줌.  

(morgan npm 검색)

몇가지 로깅 옵션을 선택할 수 있음 

logging : 무슨 일이 어디서 일어났는지를 기록함 

morgan 미들웨어로 접속정보를 console에 표시할 수 있음 

`npm install morgan`

index.js

`import morgan from "morgan";`

 : 닉네임 사용 가능 = `import logger from "morgan";`

helmet : node.js 앱의 보안에 도움이 됨

(helmet npm 검색)

안전하게 만들어주고 보안을 위한 것들을 추가해줌 

`npm install helmet`

cf. yarn : npm의 대체재 

 - 가끔 미들웨어가 연결을 끊을 때가 있음. 

 - 원한다면 middleware로 연결을 끊을 수 있음. (res.send를 실행하는 함수를 발동해서) 

만약 미들웨어가 route전에 respond를 보내면 연결이 일어나지 못해서 연결이 끊김. 

- 누군가 form을 채워서 전송하면 그 정보가 서버에 의해 받아져야 함. 

⇒ form을 받았을때 그 데이터를 가지고 있는 request object에 접근하고 싶음. 

bode parser  : express의 미들웨어. 쿠키를 다루는걸 도와줌

`npm install body-parser`

body로부터 정보를 얻을 수 있게 해줌 

`import bodyParser from "body-parser";`

body parser는 정의해야할 옵션이 있음. 

데이터를 json으로 전송하면 서버가 json을 이해해야 하고, html form을 전송하면 서버가 unencode를 이해해야 함. 

`app.use(bodyParser());` 서버가 유저로부터 받은 쿠키를 이해하는 방법

cookie parser : express의 미들웨어. 쿠키를 다루는걸 도와줌

`npm install cookie-parser`

session을 다루기 위해서 cookie에 유저 정보 저장 

`import cookieParser from "cookie-parser";`

`app.use(cookieParser());`   서버가 유저로부터 받은 쿠키를 이해하는 방법
  
