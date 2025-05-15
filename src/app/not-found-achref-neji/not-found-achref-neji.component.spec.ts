import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundAchrefNejiComponent } from './not-found-achref-neji.component';

describe('NotFoundAchrefNejiComponent', () => {
  let component: NotFoundAchrefNejiComponent;
  let fixture: ComponentFixture<NotFoundAchrefNejiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundAchrefNejiComponent]
    });
    fixture = TestBed.createComponent(NotFoundAchrefNejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
