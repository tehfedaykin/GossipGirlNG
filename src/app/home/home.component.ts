import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  post: Observable<Post>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.post = this.postsService.getPost('Jess-at-TechoramaNL');
  }

}
