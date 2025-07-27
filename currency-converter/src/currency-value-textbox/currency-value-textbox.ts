import { Component, input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-currency-value-textbox',
  imports: [FormsModule],
  templateUrl: './currency-value-textbox.html',
  styleUrl: './currency-value-textbox.scss'
})
export class CurrencyValueTextbox {
  currencyValueToConvert: string = '';
  convertedCurrencyValue: string = '';

   @Output() currencyValueToConvertChanged = new EventEmitter<string>();

   onCurrencyValueToConvertChange(value: string) {
    this.currencyValueToConvertChanged.emit(value);
    console.log('Currency Value To Convert:', value);
   }
}
