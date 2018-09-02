import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsReviewsComponent } from './patients-reviews.component';

describe('PatientsReviewsComponent', () => {
  let component: PatientsReviewsComponent;
  let fixture: ComponentFixture<PatientsReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
