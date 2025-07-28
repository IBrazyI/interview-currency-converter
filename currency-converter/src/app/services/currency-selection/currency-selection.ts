import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey, currencies, currencyType } from '../../../../enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencySelection {

  constructor(private http: HttpClient) {}

  /**
   * Fetches the list of currencies from the API.
   * @returns {Observable<any[]>} - An observable containing the list of currencies.
   */
  getCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(currencies + apiKey, {
      params: {
        type: currencyType
      }
    });
  }
}
  
