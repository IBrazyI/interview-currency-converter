import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey, convert } from '../../../../enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversion {

  constructor(private http: HttpClient) { }


  /**
   * 
   * @param {string} fromCurrency -  short code of the currency to convert from
   * @param {string} toCurrency  - short code of the currency to convert to
   * @param {string} amount - the 2 diget value to convert
   * @returns {Observable<any[]>} - returns an observable with the converted value
   */
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
