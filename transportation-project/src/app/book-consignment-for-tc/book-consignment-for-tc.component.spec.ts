import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsignmentForTcComponent } from './book-consignment-for-tc.component';

describe('BookConsignmentForTcComponent', () => {
  let component: BookConsignmentForTcComponent;
  let fixture: ComponentFixture<BookConsignmentForTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookConsignmentForTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsignmentForTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
