# COJAM-NFT-CLONE 하는 토이 프로젝트

## 작업에 사용한 모듈
> - npx create-react-app 명령어에 필요한 기본 react 패키지
> - react-router-dom : 페이지 이동에 필요한 react 라이브러리
> - json-server : mockDB를 통한 기능 구현에 필요한 라이브러리


## 테스트 구동에 필요한 절차 

> 1. node.js install
> 2. 해당 프로젝트 download, 혹은 clone
> 3. 터미널을 통해 해당 파일이 위치한 디렉토리로 접근
> 4. npm i 명령어을 통해, 필요한 모듈을 다운로드
> 5. npm install -g json-server을 통해 json-server 라이브러리 다운로드
> 6. npm start를 통해 react 프로젝트 서버 구동 
> 7. db서버 역할을 json-server구동을 위해 해줄 다른 터미널을 통해 해당 파일이 위치한 디렉토리로 접근
> 8. json-server --watch ./src/db/data.json --port 3001 입력
> 9. http://localhost:3000 에 접근
