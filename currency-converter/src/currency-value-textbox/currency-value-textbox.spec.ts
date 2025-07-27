import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyValueTextbox } from './currency-value-textbox';

describe('CurrencyValueTextbox', () => {
  let component: CurrencyValueTextbox;
  let fixture: ComponentFixture<CurrencyValueTextbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyValueTextbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyValueTextbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
