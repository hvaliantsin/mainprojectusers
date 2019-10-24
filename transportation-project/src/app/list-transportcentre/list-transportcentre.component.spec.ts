import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransportcentreComponent } from './list-transportcentre.component';

describe('ListTransportcentreComponent', () => {
  let component: ListTransportcentreComponent;
  let fixture: ComponentFixture<ListTransportcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransportcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransportcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
