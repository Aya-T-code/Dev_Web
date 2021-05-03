import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Offre } from '../../models/offre';


@Component({
  selector: 'offre-form',
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css']
})
export class OffreFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Offre';

  @Output()
  submitOffre = new EventEmitter<Offre>();

  offreForm!: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.offreForm = this.fb.group({
      proposePar: '',
      v_Depart: '',
      v_Arrivee: '',
      date: '',
      
    });
  }

  doSubmitOffre() {

    this.submitOffre.emit({
      ...this.offreForm.value,
    });

    this.offreForm.setValue({
      proposePar: '',
      v_Depart: '',
      v_Arrivee: '',
      date: '',
      
    });

  }  

}

