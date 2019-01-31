import { Component, OnInit } from '@angular/core';

interface NavItem {
  link: string;
  image: string;
}


@Component({
  selector: 'right-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  public navItems: Array<NavItem> = [
    {link: 'home', image: 'jonskeet.jpg'},
    {link: 'posts', image: 'dylanbeattie.png'},
    {link: 'pics', image: 'patriciaaas.jpg'},
    {link: 'cast', image: 'jesswhite.jpg'}
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
