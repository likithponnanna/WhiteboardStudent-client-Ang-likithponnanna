import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphWidgetComponent } from './paragraph-widget.component';

describe('ParagraphWidgetComponent', () => {
  let component: ParagraphWidgetComponent;
  let fixture: ComponentFixture<ParagraphWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
