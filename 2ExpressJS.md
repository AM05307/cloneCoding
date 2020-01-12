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
.gitignore 생성 : node_modules 추가<br/>
https://github.com/nodejs/node 에서 node .gitignore 공식파일을 볼 수 있음<br/>
https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore : node git ignore 내용 





