import {Component, Input, OnInit} from '@angular/core';
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.css']
})
export class LinkWidgetComponent implements OnInit {
  @Input() Widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
