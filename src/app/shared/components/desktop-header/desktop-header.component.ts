import { Component } from '@angular/core';
import { MenuService } from '../../../core/services/menu/menu.service';
import { MenuType } from '../../../core/services/menu/menu.type';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss'
})
export class DesktopHeaderComponent {
  public options: Array<MenuType> = []

  constructor(
    private _menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.options = this._menuService.options
  }
}
