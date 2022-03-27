import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../Hero';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() heroes?: Hero[];
  constructor() { }

  ngOnInit(): void {
  }

}
