import {Component, Input, OnInit} from '@angular/core';
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-heading-widget',
  templateUrl: './heading-widget.component.html',
  styleUrls: ['./heading-widget.component.css']
})
export class HeadingWidgetComponent implements OnInit {
  @Input() Widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
