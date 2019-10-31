import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcboardComponent } from './tcboard.component';

describe('TcboardComponent', () => {
  let component: TcboardComponent;
  let fixture: ComponentFixture<TcboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
