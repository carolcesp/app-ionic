import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  listUser: any;

  listFavorite: any[] = [];
  listUserDelete: any[] = [];

  showFavorite: boolean;

  constructor( private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getUsers().subscribe((data) => {
      this.listUser = data;
      console.log('listUser',this.listUser)
    });
  }

  favorite( user: any ) {
    this.listFavorite.push({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

    this.ionList.closeSlidingItems();

    if (this.listFavorite) {
      this.dataServices.favorites = this.listFavorite;
    }
  }

  share( user: any ) {
    console.log('share',user.name)
    this.ionList.closeSlidingItems();
  }

  delete( user: any ) {
    console.log('delete:',user.name)

    this.listUserDelete.push({
      id: user.id,
      usuario:user.name,
    });

    console.log(JSON.stringify(this.listUserDelete))


    this.ionList.closeSlidingItems();

    let result = [];

    this.listUserDelete.forEach(element => {
      result = this.listUser.filter(user => user.id !== element.id);
    });
    console.log(result);

    this.listUser = result;
    return this.listUser;
  }


}
