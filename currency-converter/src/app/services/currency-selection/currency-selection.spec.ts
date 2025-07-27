import { TestBed } from '@angular/core/testing';

import { CurrencySelection } from './currency-selection';

describe('CurrencySelection', () => {
  let service: CurrencySelection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencySelection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
