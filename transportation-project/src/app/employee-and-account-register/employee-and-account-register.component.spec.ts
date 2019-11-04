import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAndAccountRegisterComponent } from './employee-and-account-register.component';

describe('EmployeeAndAccountRegisterComponent', () => {
  let component: EmployeeAndAccountRegisterComponent;
  let fixture: ComponentFixture<EmployeeAndAccountRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAndAccountRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAndAccountRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
