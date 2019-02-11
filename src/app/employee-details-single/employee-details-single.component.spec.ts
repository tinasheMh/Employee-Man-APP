import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsSingleComponent } from './employee-details-single.component';

describe('EmployeeDetailsSingleComponent', () => {
  let component: EmployeeDetailsSingleComponent;
  let fixture: ComponentFixture<EmployeeDetailsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
