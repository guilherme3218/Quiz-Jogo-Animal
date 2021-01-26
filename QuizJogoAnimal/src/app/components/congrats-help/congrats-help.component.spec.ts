import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsHelpComponent } from './congrats-help.component';

describe('CongratsHelpComponent', () => {
  let component: CongratsHelpComponent;
  let fixture: ComponentFixture<CongratsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
