import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products:Product[] = [
    {
      id:1,
      'name':'Phone XL',
      'description':'A large phone with one of the best screens'
    },
    {
      id:2,
      'name':'Phone Mini',
      'description':'A greatphone with one of the best cameras'
    },
    {
      id:3,
      'name':'Phone Standard',
      'description':'A simple phone'
    }
  ];
}
