import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishQuizComponent } from './finish-quiz.component';

describe('FinishQuizComponent', () => {
  let component: FinishQuizComponent;
  let fixture: ComponentFixture<FinishQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
