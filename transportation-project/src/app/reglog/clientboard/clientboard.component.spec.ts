import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientboardComponent } from './clientboard.component';

describe('ClientboardComponent', () => {
  let component: ClientboardComponent;
  let fixture: ComponentFixture<ClientboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
