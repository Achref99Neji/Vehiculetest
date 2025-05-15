import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeAchrefNejiComponent } from './vehicule-achref-neji.component';

describe('VehiculeAchrefNejiComponent', () => {
  let component: VehiculeAchrefNejiComponent;
  let fixture: ComponentFixture<VehiculeAchrefNejiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculeAchrefNejiComponent]
    });
    fixture = TestBed.createComponent(VehiculeAchrefNejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
