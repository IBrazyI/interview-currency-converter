import { Component, signal } from '@angular/core';
import { BaseWidget } from '../base-widget/base-widget';

@Component({
  selector: 'app-root',
  imports: [BaseWidget],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('currency-converter');
}
