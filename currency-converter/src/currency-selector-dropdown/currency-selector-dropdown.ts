import { Component, Output, EventEmitter } from '@angular/core';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { CurrencySelection } from '../app/services/currency-selection/currency-selection';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-selector-dropdown',
  imports: [CommonModule,FormsModule],
  templateUrl: './currency-selector-dropdown.html',
  styleUrl: './currency-selector-dropdown.scss'
})
export class CurrencySelectorDropdown implements OnInit {

  dataArrayFrom: any[] = [];  // To store the API for the from dropdown
  dataArrayTo: any[] = [];    // To store the API for the to dropdown
  selectedValueFrom: string = '';  // For storing selected dropdown value
  selectedValueTo: string = '';    // For storing selected dropdown value

  constructor(private apiService: CurrencySelection) {}

  ngOnInit(): void {
    // Get the data from the API on component initialization
    this.apiService.getCurrencies().subscribe(
      (data) => {
        // The data recieive from object to array then sort it alphabetically
        const currencies = Object.entries(data)
        .map(([id, details]: [string, any]) => ({
          id,
          name: details.name || id, //Fall back to sort by id if there is no name (This stops a localeCompare error)
          short_code: details.short_code, //We specifially want the short_code as it is required for the convert API (Not mentioned in documenation)
          symbol: details.symbol


        }))
        .sort((a, b) => a.name.localeCompare(b.name));

        this.dataArrayFrom = Object.values(currencies);
        this.dataArrayTo = Object.values(currencies);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  @Output() selectedValueFromChanged = new EventEmitter<string>();
  @Output() selectedValueToChanged = new EventEmitter<string>();

  onSelectedValueFromChange(value: string) {
    this.selectedValueFromChanged.emit(value);
  };

  onSelectedValueToChange(value: string) {
    this.selectedValueToChanged.emit(value);
  };

}

//TODO
// Need two number boxes one with input the other readonly for the curreny conversion
// need to show the currency icon on the dropdowns
// Add a title and a bit of styling

