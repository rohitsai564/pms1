import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioheaderComponent } from './portfolioheader.component';

describe('PortfolioheaderComponent', () => {
  let component: PortfolioheaderComponent;
  let fixture: ComponentFixture<PortfolioheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
