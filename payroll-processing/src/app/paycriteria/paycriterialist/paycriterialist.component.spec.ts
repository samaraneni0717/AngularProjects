import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycriterialistComponent } from './paycriterialist.component';

describe('PaycriterialistComponent', () => {
  let component: PaycriterialistComponent;
  let fixture: ComponentFixture<PaycriterialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycriterialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycriterialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
