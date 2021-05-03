import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Offre } from '../../models/offre';
@Component({
  selector: 'app-offre-table',
  templateUrl: './offre-table.component.html',
  styleUrls: ['./offre-table.component.css']
})
export class OffreTableComponent {

  @Input()
  offres!: Offre[] | null;

  @Input()
  editOffreId! :number | null;
  

  @Output()
  editOffre = new EventEmitter<number>();

  @Output()
  deleteOffre = new EventEmitter<number>();

  @Output()
  saveOffre = new EventEmitter<Offre>();

  @Output()
  cancelOffre = new EventEmitter<void>();

  doEdit(offreId: number) {
    this.editOffre.emit(offreId);
  }

  doDelete(offreId: number) {
    this.deleteOffre.emit(offreId);
  }

  doSave(offre: Offre) {
    this.saveOffre.emit(offre);
  }

  doCancel() {
    this.cancelOffre.emit();
  }

}
