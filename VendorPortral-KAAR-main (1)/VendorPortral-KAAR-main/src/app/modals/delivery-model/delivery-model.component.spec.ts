import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryModelComponent } from './delivery-model.component';

describe('DeliveryModelComponent', () => {
  let component: DeliveryModelComponent;
  let fixture: ComponentFixture<DeliveryModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
