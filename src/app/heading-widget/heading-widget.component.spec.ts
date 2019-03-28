import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingWidgetComponent } from './heading-widget.component';

describe('HeadingWidgetComponent', () => {
  let component: HeadingWidgetComponent;
  let fixture: ComponentFixture<HeadingWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
