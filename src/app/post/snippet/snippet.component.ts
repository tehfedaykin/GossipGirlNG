import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post';

@Component({
  selector: 'post-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.less']
})
export class SnippetComponent implements OnInit {
  @Input() post: Post; 
  @Input() showSlug: boolean;

  constructor() { }

  ngOnInit() {
  }

}
