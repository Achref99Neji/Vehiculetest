import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiculeAchrefNejiComponent } from './add-vehicule-achref-neji.component';

describe('AddVehiculeAchrefNejiComponent', () => {
  let component: AddVehiculeAchrefNejiComponent;
  let fixture: ComponentFixture<AddVehiculeAchrefNejiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehiculeAchrefNejiComponent]
    });
    fixture = TestBed.createComponent(AddVehiculeAchrefNejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
