import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryReciptComponent } from './delivery-recipt.component';

describe('DeliveryReciptComponent', () => {
  let component: DeliveryReciptComponent;
  let fixture: ComponentFixture<DeliveryReciptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryReciptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryReciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
