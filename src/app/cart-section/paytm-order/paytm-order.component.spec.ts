import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytmOrderComponent } from './paytm-order.component';

describe('PaytmOrderComponent', () => {
  let component: PaytmOrderComponent;
  let fixture: ComponentFixture<PaytmOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytmOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
