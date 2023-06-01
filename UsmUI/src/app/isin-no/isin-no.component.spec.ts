import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsinNoComponent } from './isin-no.component';

describe('IsinNoComponent', () => {
  let component: IsinNoComponent;
  let fixture: ComponentFixture<IsinNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsinNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsinNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
