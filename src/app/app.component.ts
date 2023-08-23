import { Component, ViewChildren , QueryList} from '@angular/core';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(MenuPanelComponent) panels!: QueryList<MenuPanelComponent>;

  title = 'FastRoll';

  togglePanel(panelId: string) {
    this.panels.toArray().forEach((item: MenuPanelComponent, index: number, array: MenuPanelComponent[]) => {
      console.log(item.elementRef.nativeElement.id );
      item.toggleContent(item.elementRef.nativeElement.id === panelId);
    })
  }
}
