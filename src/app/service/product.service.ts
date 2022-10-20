import { Injectable } from '@angular/core';
import {Product} from "../../Types/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts() : Product[]{
    return [
      {
        id: 1,
        name: 'Product 1',
        price: 100
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200
      }
    ]
  }
}
