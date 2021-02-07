import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(private dataService: DataService) { }

  listFavorites = this.dataService.favorites;
  showList: boolean;

  ngOnInit() {
    if (this.listFavorites) {
      if (this.listFavorites.length > 1) {
        this.showList = true;

      } else {
        this.showList = false;
      }
    };
  }
}
