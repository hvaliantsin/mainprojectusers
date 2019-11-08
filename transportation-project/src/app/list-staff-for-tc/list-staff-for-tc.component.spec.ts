import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStaffForTcComponent } from './list-staff-for-tc.component';

describe('ListStaffForTcComponent', () => {
  let component: ListStaffForTcComponent;
  let fixture: ComponentFixture<ListStaffForTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStaffForTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStaffForTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
