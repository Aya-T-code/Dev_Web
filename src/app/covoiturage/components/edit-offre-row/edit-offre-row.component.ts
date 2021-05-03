import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Offre } from '../../models/offre';
@Component({
  selector: '.app-edit-offre-row',
  templateUrl: './edit-offre-row.component.html',
  styleUrls: ['./edit-offre-row.component.css']
})
export class EditOffreRowComponent implements OnInit {

  @Input()
  offre!: Offre;

  @Output()
  saveOffre = new EventEmitter<Offre>();

  @Output()
  cancelOffre = new EventEmitter<void>();

  editOffreForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editOffreForm = this.fb.group({
      proposePar: this.offre.proposePar,
      v_Depart: this.offre.v_Depart,
      v_Arrivee: this.offre.v_Arrivee,
      date: this.offre.date,
      
    });
  }

  doSave() {
    this.saveOffre.emit({
      ...this.editOffreForm.value,
      id: this.offre.id,
    });
  }

  doCancel() {
    this.cancelOffre.emit();
  }
}
