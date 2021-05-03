import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  _baseUrl = 'http://localhost:4250/offres';

  constructor(private httpClient: HttpClient) { }

  private getCollectionUrl() {
    return this._baseUrl;
  }

  private getElementUrl(elementId: any) {
    return this._baseUrl + '/' + encodeURIComponent(String(elementId));
  }

  all() {
    return this.httpClient.get<Offre[]>(this.getCollectionUrl());
  }

  append(offre: Offre) {
    return this.httpClient.post<Offre>(this.getCollectionUrl(), offre);
  }

  replace(offre: Offre) {
    return this.httpClient.put<Offre>(this.getElementUrl(offre.id), offre);
  }

  delete(offreId: number) {
    return this.httpClient.delete<Offre>(this.getElementUrl(offreId));
  }
}
