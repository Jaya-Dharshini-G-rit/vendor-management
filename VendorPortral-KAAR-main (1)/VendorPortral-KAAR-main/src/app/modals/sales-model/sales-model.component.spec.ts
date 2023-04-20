import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesModelComponent } from './sales-model.component';

describe('SalesModelComponent', () => {
  let component: SalesModelComponent;
  let fixture: ComponentFixture<SalesModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
