import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsignmentComponent } from './book-consignment.component';

describe('BookConsignmentComponent', () => {
  let component: BookConsignmentComponent;
  let fixture: ComponentFixture<BookConsignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookConsignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
