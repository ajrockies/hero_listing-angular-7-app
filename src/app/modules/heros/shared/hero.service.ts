import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http: HttpClient) { }
  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>('https://reqres.in/api/users?page=2');
  }

}
