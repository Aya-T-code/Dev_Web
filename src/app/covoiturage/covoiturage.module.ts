import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { SharedModule } from '../shared/shared.module';

import { OffreMainComponent } from './components/offre-main/offre-main.component';
import { OffreTableComponent } from './components/offre-table/offre-table.component';
import { EditOffreRowComponent } from './components/edit-offre-row/edit-offre-row.component';
import { ViewOffreRowComponent } from './components/view-offre-row/view-offre-row.component';
import { OffreFormComponent } from './components/offre-form/offre-form.component';



@NgModule({
  declarations: [
    OffreTableComponent,
     OffreMainComponent,  EditOffreRowComponent,
    ViewOffreRowComponent, OffreFormComponent 
  ],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule, BrowserModule, FormsModule
  ],
  exports: [OffreMainComponent]
})
export class CovoiturageModule { }
