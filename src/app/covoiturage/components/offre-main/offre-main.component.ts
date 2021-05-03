import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { AppState } from '../../../app-state';
import { Offre } from '../../models/offre';


import {createAction, props, createReducer, on, Action, createFeatureSelector, createSelector} from '@ngrx/store';

import {
  appendOffre,
  replaceOffre,
  deleteOffre,
  editOffre,
  cancelOffre
} from '../../offre.actions';









export const setCheckbox = createAction('[checkbox] set', props<{value: boolean}>());
export const set2Checkbox = createAction('[checkbox2] set', props<{value: boolean}>());

export interface CheckboxState {
    value: boolean;
}

export interface CheckboxState2 {
  value: boolean;
}

export const initialState: CheckboxState = {
    value: false,
}
;

export const initialState2: CheckboxState2 = {
  value: false,
};



export const reducer = createReducer(
    initialState,
    on(setCheckbox, (state, {value}) => ({...state, value})),
    
);

export const reducer2 = createReducer(
  initialState2,
  
  on(set2Checkbox, (state, {value}) => ({...state, value})),
);

export function checkboxReducer(state: CheckboxState = initialState, action: Action) {
    return reducer(state, action);
}

export function checkboxReducer2(state: CheckboxState2 = initialState2, action: Action) {
  return reducer2(state, action);
}

export const selectCheckboxFeature = createFeatureSelector<CheckboxState>('checkbox');
export const selectCheckboxFeature2 = createFeatureSelector<CheckboxState2>('checkbox2');

export const selectCheckboxValue = createSelector(
    selectCheckboxFeature,
    state => state.value,
);
export const selectCheckboxValue2 = createSelector(
  selectCheckboxFeature2,
  state => state.value,
);








@Component({
  selector: 'app-offre-main',
  templateUrl: './offre-main.component.html',
  styleUrls: ['./offre-main.component.css']
})
export class OffreMainComponent  {

  hidden = true;
  hidden2 = true;
  date = "";
  values! : boolean;
   
  

  offres$ = this.store.pipe(select(state => state.offres));
  editOffreId$ = this.store.pipe(select('editOffreId'));
  offress$! : Observable<Offre[]>;
  offresss$! : Observable<Offre[]>;

  constructor(private store: Store<AppState>, private readonly storee: Store<any>) {}

  doAddOffre(offre: Offre) {
    this.store.dispatch(appendOffre({ offre }));
  }

  doReplaceOffre(offre: Offre) {
    this.store.dispatch(replaceOffre({ offre }));
  }

  doDeleteOffre(offreId: number) {
    this.store.dispatch(deleteOffre({ offreId }));
  }

  doEditOffre(offreId: number) {
    this.store.dispatch(editOffre({ offreId }));
  }

  doCancelOffre() {
    this.store.dispatch(cancelOffre());
  }

  

  onSubmit(){
    this.offress$ = this.store.pipe(select(state => state.offres));
    this.offresss$= this.offress$.pipe(map(o => o.filter(o => o.date == this.date)));
     //this.offress$.subscribe(val => val.filter(o => o.date == this.date));
     console.log(this.date);
     //this.offress$.pipe(map(o => o.filter(o => this.offresss$.push(o))));
      
    }  






    //checkbox$ = this.store.select(selectCheckboxValue);
     
    

    toggle(value: boolean) {
     const checkbox$ = this.store.select(selectCheckboxValue);
        this.store.dispatch(setCheckbox({value}));
    }

    toggle2(value: boolean) {
     const checkbox$ = this.store.select(selectCheckboxValue2);
        this.store.dispatch(set2Checkbox({value}));
    }


    fieldsChange(values:any):void {
      this.hidden=!values.currentTarget.checked;
      this.toggle(!this.hidden);
    }

    fieldsChange2(values:any):void {
      this.hidden2=!values.currentTarget.checked;
      this.toggle2(!this.hidden);
    }


}