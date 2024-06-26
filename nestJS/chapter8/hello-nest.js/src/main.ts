import { NestFactory } from "@nestjs/core"; // 실제적으로는 NestFactoryStatic 클래스 c
import { HelloModule } from "./hello.module";

async function bootstrap(){

  // reate() 함수에 루트 모듈을 넣어서 NestApplication 객체 생성
  // NestApplication 객체에서 HTTP 부분을 모듈화한 HTTPAdapter가 있습니다.
  const app = await NestFactory.create(HelloModule);

  await app.listen(3000, ()=> {console.log("서버 시작!")});
}

bootstrap();