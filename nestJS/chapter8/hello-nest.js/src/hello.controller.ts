 // 대부분의 필요한 함수는 nestjs/commom에 있습니다.
import { Controller, Get} from "@nestjs/common";  // Controller와 Get은 대문자로 시작하긴 하지만 모두 함수이며 데코레이터입니다. 

@Controller() // 앞에 @가 있으면 데코레이터
export class HelloController{
  @Get()
  hello(){
    return "안년하세요! NestJS로 만든 첫 애플리케이션입니다.";
  }
}
