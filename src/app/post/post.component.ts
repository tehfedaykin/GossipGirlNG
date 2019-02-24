import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PostsService } from '../posts.service';
import { Post } from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  post: Observable<Post>; 
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.post = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postsService.getPost(params.get('slug')))
    );
  }


}
