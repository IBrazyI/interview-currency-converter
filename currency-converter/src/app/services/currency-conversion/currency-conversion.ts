import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey, convert } from '../../../../enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversion {

  constructor(private http: HttpClient) { }

  convertCurrency(fromCurrency: string, toCurrency: string, amount: string): Observable<any[]> {
    return this.http.get<any[]>(convert + apiKey, {
      params: {
        from: fromCurrency,
        to: toCurrency,
        amount: amount
      }
    });
  }
}
