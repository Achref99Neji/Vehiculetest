import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAchrefNejiComponent } from './navbar-achref-neji.component';

describe('NavbarAchrefNejiComponent', () => {
  let component: NavbarAchrefNejiComponent;
  let fixture: ComponentFixture<NavbarAchrefNejiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAchrefNejiComponent]
    });
    fixture = TestBed.createComponent(NavbarAchrefNejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
