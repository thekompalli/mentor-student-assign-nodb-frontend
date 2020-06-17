import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMentorComponent } from './change-mentor.component';

describe('ChangeMentorComponent', () => {
  let component: ChangeMentorComponent;
  let fixture: ComponentFixture<ChangeMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
