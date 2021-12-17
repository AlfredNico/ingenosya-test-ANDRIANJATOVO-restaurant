import { IRepas } from './../../interfaces/irepas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepasService {
  constructor(private readonly _http: HttpClient) {}

  getRepas() {
    return this._http.get<IRepas[]>(`${environment.base_url}/repas`);
  }

  getIngredient(id: any) {
    return this._http.get<any[]>(
      `${environment.base_url}/repas/${id}/ingredient`
    );
  }

  postRepa(data: any, prix_unitaire: any, file: File) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('libelle', data);
    formData.append('prix_unitaire', prix_unitaire);

    return this._http.post<IRepas>(`${environment.base_url}/repas`, formData);
  }
  postElementRepas(id: number, data: any) {
    return this._http.post<{ message: string }>(
      `${environment.base_url}/repas/${id}/elements`,
      data
    );
  }
}
