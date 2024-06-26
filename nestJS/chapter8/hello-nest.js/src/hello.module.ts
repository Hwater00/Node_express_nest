import {Module} from "@nestjs/common";
import { HelloController } from "./hello.controller";

@Module({ // @Module은 모듈을 설정할 때 사용하는 데코레이터
  controllers:[HelloController],  // controllers에는 배열로 모듈에 포함된 컨트롤러를 설정합니다.
})

export class HelloModule {}