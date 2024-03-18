import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { DesktopFooterComponent } from './components/desktop-footer/desktop-footer.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';


@NgModule({
  declarations: [
    DesktopHeaderComponent,
    MobileHeaderComponent,
    DesktopFooterComponent,
    MobileFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DesktopHeaderComponent,
    MobileHeaderComponent,
    DesktopFooterComponent,
    MobileFooterComponent
  ]
})
export class SharedModule { }
