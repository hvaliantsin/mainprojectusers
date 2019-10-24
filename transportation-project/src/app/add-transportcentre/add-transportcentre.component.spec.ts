import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportcentreComponent } from './add-transportcentre.component';

describe('AddTransportcentreComponent', () => {
  let component: AddTransportcentreComponent;
  let fixture: ComponentFixture<AddTransportcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransportcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransportcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
