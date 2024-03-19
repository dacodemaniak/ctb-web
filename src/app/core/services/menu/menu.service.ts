import { Injectable } from '@angular/core';
import { MenuType } from './menu.type';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public options: Array<MenuType> = [
    {
      label: 'Accueil',
      title: 'Accueil du Centre Toulousain du Bénévolat',
      route: ['/', 'home'],
      current: true
    },
    {
      label: 'Bénévoles',
      title: 'Bénévoles du Centre Toulousain du Bénévolat',
      route: ['/', 'benevoles'],
      current: false
    },
    {
      label: 'Associations',
      title: 'Associations membres du Centre Toulousain du Bénévolat',
      route: ['/', 'association'],
      current: false
    },
    {
      label: 'Evénements',
      title: 'Les événements du Centre Toulousain du Bénévolat',
      route: ['/', 'evenements'],
      current: false
    },
    {
      label: 'Contact',
      title: 'Contactez le Centre Toulousain du Bénévolat',
      route: ['/', 'contact'],
      current: false
    },
  ]
  constructor() { }
}
