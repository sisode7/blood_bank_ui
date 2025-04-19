import { Component, signal } from '@angular/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'account_balance',
      label: 'Storage',
      route: 'storage'
    },
    {
      icon: 'accessibility',
      label: 'Donors',
      route: 'donor'
    }
  ]);
}
