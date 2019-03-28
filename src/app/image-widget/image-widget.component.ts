import {Component, Input, OnInit} from '@angular/core';
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.css']
})
export class ImageWidgetComponent implements OnInit {
  @Input() Widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
