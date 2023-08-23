import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() targetId: string = '';
  @Input() iconType: string  = '';
  @Output() clickEvent = new EventEmitter<string>();

  click() {
    this.clickEvent.emit(this.targetId);
  }
}