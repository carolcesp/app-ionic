import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  listadoHeroes: Observable<any>;
  publisher: string = '';

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.listadoHeroes = this.dataServices.getHeroes();
  }

  segmentChanged(event) {
    if (event.detail.value === 'todos'){
      return this.publisher = '';
    }

    this.publisher = event.detail.value;
  }

}
