import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from "../interface/interface";
import { delay } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor( private http: HttpClient) { }

  user: string
  favorites: any;

  getUsers () {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  getAlbum () {
    let url = 'https://jsonplaceholder.typicode.com/albums';
    return this.http.get(url);
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu-options.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
      .pipe(delay (2000));
  }
  
}
