import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  name: string = 'Carolina';
  
  user = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Logeado!')
  }

}
