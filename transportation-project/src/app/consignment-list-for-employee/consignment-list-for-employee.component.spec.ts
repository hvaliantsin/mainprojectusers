import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentListForEmployeeComponent } from './consignment-list-for-employee.component';

describe('ConsignmentListForEmployeeComponent', () => {
  let component: ConsignmentListForEmployeeComponent;
  let fixture: ComponentFixture<ConsignmentListForEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentListForEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentListForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
