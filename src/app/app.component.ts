import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild('modalContent')
  private modalContent: TemplateRef<any>;
  title = 'gossip-girl-angular';
  modalRef: BsModalRef;
  public map = {
    title: 'My first AGM project',
    lat: 36.8830809,
    lng: -75.9849285,
    zoom: 15
  }

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.openModal(this.modalContent);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
