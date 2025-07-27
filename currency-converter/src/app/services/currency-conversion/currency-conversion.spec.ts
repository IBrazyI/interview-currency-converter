import { TestBed } from '@angular/core/testing';

import { CurrencyConversion } from './currency-conversion';

describe('CurrencyConversion', () => {
  let service: CurrencyConversion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyConversion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
