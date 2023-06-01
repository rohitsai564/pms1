import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentThemeComponent } from './investment-theme.component';

describe('InvestmentThemeComponent', () => {
  let component: InvestmentThemeComponent;
  let fixture: ComponentFixture<InvestmentThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
