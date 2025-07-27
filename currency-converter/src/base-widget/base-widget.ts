import { Component, input, Output, EventEmitter } from '@angular/core';
import { CurrencySelectorDropdown } from "../currency-selector-dropdown/currency-selector-dropdown";
import { CurrencyValueTextbox } from "../currency-value-textbox/currency-value-textbox";
import { OnInit } from '@angular/core';
import { CurrencyConversion } from '../app/services/currency-conversion/currency-conversion';

@Component({
  selector: 'app-base-widget',
  imports: [CurrencySelectorDropdown, CurrencyValueTextbox],
  templateUrl: './base-widget.html',
  styleUrl: './base-widget.scss'
})
export class BaseWidget {

  constructor(private apiService: CurrencyConversion) { }

  fromCurrency: any = undefined;
  toCurrency: any = undefined;
  valueToConvert: any = undefined;
  convertedCurrency: any = undefined;

  onSelectedValueFromChanged(value: string) {
    if (value !== '') {
      this.fromCurrency = value;
      this.convertCurrency();
    }
    return;
  }

  onSelectedValueToChanged(value: string) {
    if (value !== '') {
      this.toCurrency = value;
      this.convertCurrency();
    }
  }

  onCurrencyValueToConvertChanged(value: string) {
    if (value !== '') {
      this.valueToConvert = value;
      this.convertCurrency();
    }
  }

  @Output() convertedCurrencyUpdated = new EventEmitter<number>();

  convertCurrency() {
    if (this.fromCurrency && this.toCurrency && this.valueToConvert) {
      this.apiService.convertCurrency(this.fromCurrency, this.toCurrency, this.valueToConvert).subscribe(
        (data) => {
          console.log(data)
          // @ts-ignore - used here as Typescript does not like the propery name "value" which we get from the API
          if (data && typeof data.value !== 'undefined') {
            // @ts-ignore - used here as Typescript does not like the propery name "value" which we get from the API
            this.convertedCurrency = data.value;
            this.convertedCurrencyUpdated.emit(this.convertedCurrency);
          }
        },
        (error) => {
          console.error('API error:', error);
        }
      );
    }
    return this.convertedCurrency;
  }

}


