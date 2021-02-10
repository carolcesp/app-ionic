import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from "../interface/interface";
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor( private http: HttpClient) { }

  user: string
  favorites: any;

  getUsers () {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url)
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu-options.json')

  }
}
