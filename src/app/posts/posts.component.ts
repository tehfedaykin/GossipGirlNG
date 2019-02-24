import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts(); 
  }

}
