import { Component } from '@angular/core';
import { MenuService } from '../../../core/services/menu/menu.service';
import { MenuType } from '../../../core/services/menu/menu.type';

@Component({
  selector: 'app-desktop-footer',
  templateUrl: './desktop-footer.component.html',
  styleUrl: './desktop-footer.component.scss'
})
export class DesktopFooterComponent {
  constructor(
    private _menuService: MenuService
  ) {}

  get options(): Array<MenuType> {
    return this._menuService.options
  }
}
