import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTitleHeadComponent } from './course-title-head.component';

describe('CourseTitleHeadComponent', () => {
  let component: CourseTitleHeadComponent;
  let fixture: ComponentFixture<CourseTitleHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTitleHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTitleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
