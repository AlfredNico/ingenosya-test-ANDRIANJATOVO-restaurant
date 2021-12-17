import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  constructor(private _http: HttpClient) {}

  getCommande() {
    return this._http.get<any[]>(`${environment.base_url}/commandes`);
  }

  getBenefice() {
    return this._http.get<any[]>(`${environment.base_url}/benefices`);
  }
}
