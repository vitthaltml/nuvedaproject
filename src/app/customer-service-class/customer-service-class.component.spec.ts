import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceClassComponent } from './customer-service-class.component';

describe('CustomerServiceClassComponent', () => {
  let component: CustomerServiceClassComponent;
  let fixture: ComponentFixture<CustomerServiceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
