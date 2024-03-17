import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';


@NgModule({
  declarations: [
    DesktopHeaderComponent,
    MobileHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DesktopHeaderComponent,
    MobileHeaderComponent
  ]
})
export class SharedModule { }
