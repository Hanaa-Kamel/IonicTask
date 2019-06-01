import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor( private product: ProductService) { }

  ngOnInit() {
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.product.searchData(this.searchTerm, this.type);
  }
}
