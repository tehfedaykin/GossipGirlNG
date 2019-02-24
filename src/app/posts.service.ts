import { Injectable } from '@angular/core';
import posts from './postsData';
import { of } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts() {
    return of(posts)
  }

  getPost(slug: string) {
    let title = slug.replace(/-/g, ' ');
    return of(_.find(posts, {title: title}));
  }
}
