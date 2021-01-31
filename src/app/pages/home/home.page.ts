import { Component, OnInit } from '@angular/core';

interface Listado {
  icon: string;
  name: string;
  redirectTo: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listado: Listado[] = [
    {
      icon: 'logo-octocat',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-github',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
