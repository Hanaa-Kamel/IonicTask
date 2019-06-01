import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum SearchType {
  all = '',
  Vegetables = 'Vegetables',
  Fruits = 'Fruits',
  Meats = 'Meats',
  Seafood = 'Seafood'
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';

  constructor(private http: HttpClient) { }
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}`).pipe(
      map(results => results[' Search'])
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full`);
  }

}
