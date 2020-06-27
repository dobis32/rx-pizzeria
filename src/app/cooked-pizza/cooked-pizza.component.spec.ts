import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookedPizzaComponent } from './cooked-pizza.component';

describe('CookedPizzaComponent', () => {
  let component: CookedPizzaComponent;
  let fixture: ComponentFixture<CookedPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookedPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookedPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
