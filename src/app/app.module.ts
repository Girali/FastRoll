import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TooltipComponent } from './common/ui/tooltip/tooltip.component';
import { TooltipDirective } from './common/ui/tooltip/tooltip.directive';
import { SvgIconComponent } from './common/svg-icon/svg-icon.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    TooltipComponent,
    TooltipDirective,
    SvgIconComponent,
    MenuPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
