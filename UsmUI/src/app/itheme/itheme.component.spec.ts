import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IthemeComponent } from './itheme.component';

describe('IthemeComponent', () => {
  let component: IthemeComponent;
  let fixture: ComponentFixture<IthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IthemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
