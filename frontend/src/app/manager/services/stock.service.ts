import { IStock } from './../../interfaces/istock';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private readonly _http: HttpClient) {}

  getStocks() {
    return this._http.get<IStock[]>(`${environment.base_url}/stocks`);
  }

  getAvailableStok() {
    return this._http.get<IStock[]>(`${environment.base_url}/stocks/available`);
  }

  postStock(data: IStock) {
    return this._http.post<{ message: string }>(
      `${environment.base_url}/stocks`,
      data
    );
  }

  updateStock(id: number, data: IStock) {
    return this._http.put<{ message: string }>(
      `${environment.base_url}/stocks/${id}`,
      data
    );
  }

  stockFilter(data: any) {
    return this._http.post<IStock[]>(
      `${environment.base_url}/stocks/filters`,
      data
    );
  }
}
