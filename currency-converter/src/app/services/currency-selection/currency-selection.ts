import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey, currencies, currencyType } from '../../../../enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencySelection {

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(currencies + apiKey, {
      params: {
        type: currencyType
      }
    });
  }
}
  
