import {Component, Input, OnInit} from '@angular/core';
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  @Input() Widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
