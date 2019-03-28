import {Component, Input, OnInit} from '@angular/core';
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-paragraph-widget',
  templateUrl: './paragraph-widget.component.html',
  styleUrls: ['./paragraph-widget.component.css']
})
export class ParagraphWidgetComponent implements OnInit {
  @Input() Widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
