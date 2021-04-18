import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]> = this.postsService.getPosts();
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
}
