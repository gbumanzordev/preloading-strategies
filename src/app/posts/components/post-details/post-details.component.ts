import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  currentId: number;
  post: IPost;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.currentId = Number(params.get('id'));
        this.getDetails();
      }
    });
  }

  getDetails(): void {
    this.postsService.getSinglePost(this.currentId).subscribe((post) => {
      this.post = post;
    });
  }
}
