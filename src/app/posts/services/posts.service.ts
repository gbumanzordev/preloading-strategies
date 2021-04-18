import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class PostsService {
  private url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.url}/posts`);
  }

  getSinglePost(postId: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${this.url}/posts/${postId}`);
  }
}
