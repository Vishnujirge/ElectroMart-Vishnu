import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() menuClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick() {
  this.menuClick.emit();
}
}
