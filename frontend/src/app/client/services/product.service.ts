import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRepas } from 'src/app/interfaces/irepas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getProduct() {
    return this._http.get<IRepas[]>(
      `${environment.base_url}/repas/valid/vente`
    );
  }

  postCommande(id: any, data: any) {
    return this._http.post<{ message: string }>(
      `${environment.base_url}/commandes/${id}`,
      data
    );
  }
}
