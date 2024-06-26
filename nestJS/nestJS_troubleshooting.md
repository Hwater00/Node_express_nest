1. nestjs를 cli로 생성 Delete cr 에러
- 문제 상황
nestjs를 cli로 생성을 하면 자동으로 설정되는 파일에서 Delete cr 에러가 발생

- 원인
windows에서 발생하는 오류로서, prettier와 windows의 개행방식에 차이에서 발생. 줄 끝에 쓸모 없는 캐리지 리턴 문자 (␍)가 있음을 나타냅니다. 

- 해결방법
nest.js 프로젝트의 .eslintrc.js 파일에서  rules 하단에 코드를 추가한다.
'prettier/prettier': ['error', { endOfLine: 'auto' }],
