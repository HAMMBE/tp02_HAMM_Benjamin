import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ProductService} from "../service/product.service";
import {Observable} from "rxjs";
import {Product} from "../../Types/product";
import {map} from "rxjs/internal/operators/map";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id : number = 0;
  product: Product | undefined;
  constructor(private route : ActivatedRoute, private productService : ProductService ){ }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((data) => {
      this.product = data.find(p => p.id == this.route.snapshot.params['id']);
    });
  }
}
