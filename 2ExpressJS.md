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
  
---
# 2.12 Recap

- 정리

 init.js에는 app.js에서 import한 application이 있음. application 관련 코드들은 app.js파일에 담겨 있음. 

express를 import했고 express를 실행한 결과를 app 상수로 만듬. 그리고 middleware를 추가함. 

cookieParser는 cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어. 

사용자 인증같은 곳에서 쿠키를 검사할 때 사용해야함. 

bodyParser는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어. request정보에서 form이나 json형태로 된 body를 검사함. 

아바타의 사진이나 비디오를 업로드 할 때 , 제목이나 댓글 같은 정보를 전달할 때 form에 담아서 업로드 해야함. 

helmet 미들웨어는 appllication이 더 안전하도록 만들어줌 

morgan 미들웨어의 역할을 application에서 발생하는 모든 일들을 loggin하는 것

그리고 router 3개를 사용함 

global Router :  /home, /search, /join, /login, /logout URL이 담겨있음 

user Router : /user/ 주소들이 있음. 주 소들은 모두 routers.js에 정의. 한 파일이 바뀌면 모두 적용되도록 할 수 있음 

모든 router의 로지거들은 모두 userController나 videoController에 정의되어 있음 

video Contoller, user Controller : MVC에서 C 부분 

- Pug ; `pug.oug`
express에서 View를 다루는 방식중의 하나. express로 html을 보여줄 수 있음. HTML을 아주 멋지게 보이도록 만들어줌 
res.send대신에 실제 HTML을 전달할 것. css로 멋지게 꾸밀 수 있고 이게 MVC에서 V부분.

# 2.13 Installing Pug

- Pug 설치 
pug = view 엔진 
`npm install pug`
- view engine 설정 변경. 기본값) undefined → view engine의 설정값을 pug로 변경 
app.js 
`app.set("view engine", "pug");`
Pug와 express에는 view파일들의 위치에 관한 기본 설정이 있음. 만약 그 설정을 바꾸고 싶다면 'views'설정을 바꾸면 됨. application의 화면이 담긴 디렉토리나 디렉토리의 배열을 입력하면 됨. 
html 파일을 저장해야 하는 폴더의 기본값은 프로젝트의 작업 디렉토리 + '/views'임
- views 폴더 생성 > home.pug 생성
- Pug : 템플릿 언어.
`p Hello`( = `<p>Hello</p>` )pug가 이 코드를 일반적인 html 코드로 변환함
- 이 템플릿을 웹사이트에서 보여주려면 어떻게 해야 할까? 
videoController 에서 res.send 대신 res.render 사용. render함수의 인자로 템플릿 파일의 이름을 입력하면 됨 
이 함수가 views폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾은 후에 보여줄 것. 
확장자 pug는 우리가 view engine에서 설정했음
---
# 2.14 Layouts with Pug

- pug : <>대신 들여쓰기 사용. 탭 안쪽에 있는 코드라면 무언가의 내부에 있는 코드라는 뜻. 
닫는 태그 쓸 필요없고 들여쓴 칸을 다시 되돌아오면 됨
- main.pug 레이아웃 파일에는 실제 내용들이 들어갈 자리가 있어야 함.  main태그에 다른 모든 페이지들의 내용이 들어감 → 이작업을 위해서 block을 추가함. block에 화면의 내용들이 채워짐
- 우리의 레이아웃인 main.pug를 사용하려면 어떻게 해야할까? 
home.pug에서 파일의 제일 윗부분에 extension(확장)을 함 `extends layouts/main.pug`= 이 레이아웃을 템플릿에서 확장하겠다는 뜻. 이 코드들도 사용하고 추가도 한다는 뜻
- 모든 템플릿에 레이아웃을 사용하도록 변경 : 모든 템플릿이  같은 main레이아웃에서 extends 함 
* 만약 footer가 없는 화면이라면 이 레이아웃을 extends 하면 안됨

---
# 2.15 Partials with Pug

- partials : 페이지의 일부분
- `link(rel="stylesheet", href="[https://use.fontawesome.com/releases/v5.5.0/css/all.css](https://use.fontawesome.com/releases/v5.5.0/css/all.css)" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU", crossorigin="anonymous")` 
fontswesome 아이콘 링크
- pug에서 text사이에 js를 추가하고 싶을 때 : `#{    }` 사용
- 우리가 추가한 라우트 들이 pug파일로 연결되면 좋겠음

---
# 2.16 Local Variables in Pug

- 컨트롤러에 있는 정보를 템플릿에 추가하는 법
- 헤더가 라우트객체에 접근하도록 설정 : 1 미들웨어 사용
- locals : 로컬 변수 응답을 포함하는 객체
- 미들웨어는 next에 req를 전달해야 함. 미들웨어가 커넥션과 라우트들 사이에 있으니까 next()라고 하면 됨
- To give 'pug' a local variable I have to  "Add it to res.locals"

--- 
# 2.18 Search Controller

- 검색창 만들기 : `form(name="term" )`

`input(type="text", name="term") : url에 [http://localhost:4000/search?term=](http://localhost:4000/search?term=nico)(검색어)`로 표시됨 

검색창에서 검색한 검색어는 req.query =({ term: 'android' })에 들어있음.  express가 query를 집어넣음. 

[http://localhost:4000/search?term=android&filter=first](http://localhost:4000/search?term=android&filter=first) 로 써서 넘기면 res.query는 { term: 'android', filter: 'first' }가 됨 ⇒ javascript의 객체 형태로 보이고 있음 

`console.log(req.query.term);` 의 결과 : android

- ES6 코딩방식 
`const { query : { term } } = req;` 
= req.query.term 
`{ term : searchingBy }`  =  term의 변수명을 searchingBy로 할당. searchingBy = req.query.term
- searchingBy를 search템플릿에 전달

    export const search = (req, res) => {
    	const {
        query: { term : searchingBy }
      } = req;
      res.render("search", { pageTitle: "Search", searchingBy });
    	// searchingBy : searchingBy 라고 안쓰고 searchingBy라고만 써도 
      // searchingBy로 입략되는 값이 위에 있는 searchingBy와 같다고 자동으로 인식함 
    };

    const {
        query: { term : searchingBy }
      } = req;
    는 
    const searchingBy = req.query.params와 똑같음 

- 컨트롤러도 query에 접근하려면 method가 get이어야 함. get method가 url에 정보를 추가해줌. post method면 저기 주소에 표시되지 않음

