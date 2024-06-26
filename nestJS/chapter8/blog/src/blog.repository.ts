import {readFile, writeFile } from 'fs/promises'; // 파일을 읽고 쓰는 모듈 임포트
import { PostDto } from './blog.model';

// 블로그 리포지토리 인터페이스 정의
export interface BlogRepositroy {
  getAllPost(): Promise <PostDto[]>;
  
}