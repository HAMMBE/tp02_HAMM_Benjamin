import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../../Types/product";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-show-catalogue',
  templateUrl: './show-catalogue.component.html',
  styleUrls: ['./show-catalogue.component.css']
})
export class ShowCatalogueComponent implements OnInit {

  constructor(public productService : ProductService) { }
  public myObservable$: Observable<Product[]> = of(this.productService.getProducts());

  productList: Product[] = [];
  ngOnInit(): void {

    this.myObservable$.subscribe({
      next: (value : Product[]) => {
        console.log("got");
      },
      error: (err) => {
        console.log("error");
      },
      complete: () => {
        console.log("complete");
      }
    });
  }


  ngOnDestory(): void {

  }

}
