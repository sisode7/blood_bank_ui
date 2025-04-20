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
      icon: 'bloodtype',
      label: 'Storage',
      route: 'storage'
    },
    {
      icon: 'volunteer_activism',
      label: 'Donations',
      route: 'donations'
    },
    {
      icon: 'hail',
      label: 'Blood Requests',
      route: 'blood-requests'
    },
    {
      icon: 'groups',
      label: 'Bank Consumers',
      route: 'consumers'
    }
  ]);
}
