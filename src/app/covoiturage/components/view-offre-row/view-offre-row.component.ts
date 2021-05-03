import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Offre } from '../../models/offre';
@Component({
  selector: '.app-view-offre-row',
  templateUrl: './view-offre-row.component.html',
  styleUrls: ['./view-offre-row.component.css']
})
export class ViewOffreRowComponent implements OnInit {

  @Input()
  offre!: Offre ;

  @Output()
  editOffre = new EventEmitter<number>();

  @Output()
  deleteOffre = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doEdit() {
    this.editOffre.emit(this.offre.id);
  }

  doDelete() {
    this.deleteOffre.emit(this.offre.id);
  }
}
