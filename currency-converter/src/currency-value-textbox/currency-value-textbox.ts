import { Component, input, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-currency-value-textbox',
  imports: [FormsModule],
  templateUrl: './currency-value-textbox.html',
  styleUrl: './currency-value-textbox.scss'
})
export class CurrencyValueTextbox {
  @Input() convertedCurrencyValue: string = '';
  @Input() fromShortCode: string = '';
  @Input() toShortCode: string = '';

  currencyValueToConvert: string = '';

  @Output() currencyValueToConvertChanged = new EventEmitter<string>();

  onCurrencyValueToConvertChange(value: string) {
    // Convert to float and fix to 2 decimal places
    const valueToFloat = Number.parseFloat(value);
    const fixedValue = isNaN(valueToFloat) ? '0.00' : valueToFloat.toFixed(2);
    this.currencyValueToConvert = fixedValue; // Update the model so the input re-renders
    this.currencyValueToConvertChanged.emit(this.currencyValueToConvert);
  }


}
