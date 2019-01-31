import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: Post; 
  @Input() slug: string;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    console.log('slug', this.slug);
    let slug = this.route.snapshot.paramMap.get('slug');
    if(slug) {
      this.post = this.postsService.getPost(slug);
      console.log(this.post);
    }

  }

}
