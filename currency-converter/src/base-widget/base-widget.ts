import { Component, input, Output, EventEmitter } from '@angular/core';
import { CurrencySelectorDropdown } from "../currency-selector-dropdown/currency-selector-dropdown";
import { CurrencyValueTextbox } from "../currency-value-textbox/currency-value-textbox";
import { OnInit } from '@angular/core';
import { CurrencyConversion } from '../app/services/currency-conversion/currency-conversion';
import e from 'express';

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

  onSelectedValueFromChanged(item: any) {
    if (item !== '') {
      this.fromCurrency = item;
      this.convertCurrency();
    }
    return;
  }

  onSelectedValueToChanged(item: any) {
    if (item !== '') {
      this.toCurrency = item;
      this.convertCurrency();
    }
  }

  onCurrencyValueToConvertChanged(value: string) { 
    if (value !== undefined && value !== '' && value !== null) {
      this.valueToConvert = value;
      this.convertCurrency();
    } else {
      this.valueToConvert = 0; // Reset the converted currency if input is cleared
      this.convertedCurrency = 0; // Reset the converted currency
      this.convertedCurrencyUpdated.emit(0); // Optionally emit 0 to update textbox
    }
  }

  @Output() convertedCurrencyUpdated = new EventEmitter<number>();

  /**
   * Converts the currency based on the selected currencies and input value.
   * @returns {number} - The converted currency value.
   */
  convertCurrency() {
    if (this.fromCurrency?.short_code && this.toCurrency?.short_code && this.valueToConvert) {
      this.apiService.convertCurrency(this.fromCurrency.short_code, this.toCurrency.short_code, this.valueToConvert).subscribe(
        (data) => {
          // @ts-ignore - used here as Typescript does not like the propery name "value" which we get from the API
          if (data && typeof data.value !== 'undefined') {
            // @ts-ignore - used here as Typescript does not like the propery name "value" which we get from the API
            const convertValueToFloat = Number.parseFloat(data.value).toFixed(2);
            this.convertedCurrency = convertValueToFloat;
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

//TODO
//document how to run on another machine


