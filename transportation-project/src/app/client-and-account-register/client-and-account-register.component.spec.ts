import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAndAccountRegisterComponent } from './client-and-account-register.component';

describe('ClientAndAccountRegisterComponent', () => {
  let component: ClientAndAccountRegisterComponent;
  let fixture: ComponentFixture<ClientAndAccountRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAndAccountRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAndAccountRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
