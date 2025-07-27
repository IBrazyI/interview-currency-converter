import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectorDropdown } from './currency-selector-dropdown';

describe('CurrencySelectorDropdown', () => {
  let component: CurrencySelectorDropdown;
  let fixture: ComponentFixture<CurrencySelectorDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencySelectorDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencySelectorDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
