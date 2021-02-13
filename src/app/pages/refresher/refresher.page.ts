import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  list: any[] = []

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    setTimeout(() => {
       this.list = Array(10)
      event.target.complete();
    }, 1000);
  }

}
