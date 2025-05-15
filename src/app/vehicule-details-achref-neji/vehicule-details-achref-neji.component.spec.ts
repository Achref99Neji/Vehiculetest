import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailsAchrefNejiComponent } from './vehicule-details-achref-neji.component';

describe('VehiculeDetailsAchrefNejiComponent', () => {
  let component: VehiculeDetailsAchrefNejiComponent;
  let fixture: ComponentFixture<VehiculeDetailsAchrefNejiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculeDetailsAchrefNejiComponent]
    });
    fixture = TestBed.createComponent(VehiculeDetailsAchrefNejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
