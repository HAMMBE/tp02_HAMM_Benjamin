import { Injectable } from '@angular/core';
import {Product} from "../../Types/product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environement/env";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  env = environment;
  public getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.env.catalogue);
  }
}
