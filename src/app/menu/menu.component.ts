import { Component, EventEmitter, Output } from '@angular/core';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() panelEvent = new EventEmitter<string>();

  panelButtonEvent(s: string) {
    this.panelEvent.emit(s);
  }
}