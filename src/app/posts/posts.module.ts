import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostsComponent, PostCardComponent, PostDetailsComponent],
  imports: [CommonModule, PostsRoutingModule],
  providers: [PostsService],
})
export class PostsModule {}
