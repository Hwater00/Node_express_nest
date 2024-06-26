import { Controller, Param, Get, Post, Body, Delete, Put} from '@nestjs/common'; // 데코레이터 함수 임포트
import { BlogService } from './blog.service';

@Controller('blog') // 클래스에 붙이는 Controller 데코레이터
export class BlogController {
  blogService: BlogService;
  constructor(){
    this.blogService = new BlogService(); // 생성자에서 블로그 서비스 생성
  }


  @Get()
  getAllPosts() {
    console.log('모든 게시글 가져오기');
    return this.blogService.getAllPosts();
  }

  @Post()
  createPost(@Body() postDto) {  //@Body() post:any 구문은 HTTP의 요청의 body 내용을 post에 할당
    console.log('게시글 작성');
    this.blogService.createPost(postDto);
    return 'success';
  }
  @Get('/:id')
  getPost(@Param('id') id : string) {
    console.log(`[id:${id} 게시글 하나 가져오기]`);
    return this.blogService.getPost(id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id:string ){
    console.log('게시글 삭제');
    this.blogService.delete(id);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id:string, @Body() postDto){
    console.log(`[${id}] 게시글 업데이트`, id,postDto);
    return this.blogService.updatePost(id,postDto);
  }
}
