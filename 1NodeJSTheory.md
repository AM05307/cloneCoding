노마드 코더 클론코딩

1.0 <br/>
JavaScript는 브라우저에 내장되어 있고 그동안 브라우저에 종속되어 있었음<br/>
Node JS : 브라우저 밖의 JavaScript.<br/>
Node.js가 한 일 : JavaScript를 브라우저 밖으로 가지고 나와서 유저가 (유저의 컴퓨터에서) 사용할 수 있게 함 
<br/>
1.1<br/>
언제 Node.js를 사용해야 할까 : 백엔드, 서버를 빌드해야 하는 경우 <br/>
어떨 때 node.js를 써야할까 :<br/>
1. JavaScript가 좋아서 프론트엔드와 백엔드를 JavaScript로 만들고자 하는 경우<br/>
2. 모든걸 customize할 수 있는 능력이 있다면 : Node.js에는 거의 아무것도 들어 있지 않음<br/>
Node.js를 사용하기 가장 좋은 경우 : 많은 데이터를 움직여야 할 때 (Database 생성, Database 삭제, 사용자에게 전송, 저장 등)<br/>
실시간 동기 (ex. 인스타그램, 채팅 등) : 상당히 실시간 처리를 하는 서버임. 위치를 업데이트하고 서버의 Scale를 잘 다룰 수 있음.<br/>
Node.js는 데이터를 다루는 성능이 아주 좋음. <br/> 
NodeJS is very good at managing data (create, read, delete, update)<br/> 
<br/>
단, Node.js는 내 컴퓨터의 하드웨어(메모리, 램 등)에 접근할 수 없음. 그래서 서버의 하드 드라이브를 써야하고, 바이트 단위의 어려운 작업이나, 비디오 인코딩, 디코딩, 이미지에 필터를 적용하거나, 20군데 크롭하는 경우에는 적합하지 않음<br/>
JavaScript는 하드웨어, 하드코어한 처리를 위해 설계된 게 아님.<br/>
<br/>
1.2<br/>
누가 Node.js를 사용하는가<br/>
- Paypal, Uber, Netfilx : 데이터를 다루기 때문에 Node.js를 사용.<br/>
백엔드를 만들때 꼭 한가지 언어로만 만들 필요는 없음.<br/>
