import { Component } from '@angular/core';


import {Store} from '@ngrx/store';
import { selectCheckboxValue, setCheckbox } from './covoiturage/components/offre-main/offre-main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appw';
   checkbox$ = this.store.select(selectCheckboxValue);

    constructor(private readonly store: Store<any>) {
    }

    toggle(value: boolean) {
        this.store.dispatch(setCheckbox({value}));
    }
}
