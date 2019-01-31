import { Component, OnInit } from '@angular/core';
import Cast from '../castData';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.less']
})
export class CastComponent implements OnInit {
  public cast = Cast;
  
  constructor() { }

  ngOnInit() {

  }

}
