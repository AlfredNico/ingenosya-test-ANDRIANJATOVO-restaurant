import { IRepas } from './../../interfaces/irepas';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VenteService {
  constructor(private readonly _http: HttpClient) {}

  getVentes() {
    return this._http.get<IRepas[]>(`${environment.base_url}/repas/vente`);
  }

  ajouteVente(id: any) {
    return this._http.get<{ message: string }>(
      `${environment.base_url}/repas/${id}/to/vente`
    );
  }
}
