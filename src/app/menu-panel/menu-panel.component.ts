import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css'],
})

export class MenuPanelComponent {
  constructor(public elementRef: ElementRef) {}
  
  expanded = false;
  toggleContent(b: boolean) {
    this.expanded = b;
  }
}