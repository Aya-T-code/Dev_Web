import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { offresReducer, editOffreIdReducer } from './covoiturage/offre.reducers';

import { CovoiturageModule } from './covoiturage/covoiturage.module';

import { OffreTableComponent } from './covoiturage/components/offre-table/offre-table.component';
import { checkboxReducer, checkboxReducer2, OffreMainComponent } from './covoiturage/components/offre-main/offre-main.component';

import { EditOffreRowComponent } from './covoiturage/components/edit-offre-row/edit-offre-row.component';
import { ViewOffreRowComponent } from './covoiturage/components/view-offre-row/view-offre-row.component';
import { OffreFormComponent } from './covoiturage/components/offre-form/offre-form.component';
@NgModule({
  declarations: [
   
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    StoreModule.forRoot({
      offres: offresReducer,
      editOffreId: editOffreIdReducer,
      checkbox: checkboxReducer,
      checkbox2: checkboxReducer2,
    }),
    StoreDevtoolsModule.instrument(),
    CovoiturageModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
