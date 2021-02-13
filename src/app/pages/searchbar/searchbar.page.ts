import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  listAlbum: any[] = [];
  text: string = '';

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getAlbum().subscribe((data: any) => {
      this.listAlbum = data;
    });
  }

  onSearchChange(event) {
    this.text = event.detail.value;
  }

}
