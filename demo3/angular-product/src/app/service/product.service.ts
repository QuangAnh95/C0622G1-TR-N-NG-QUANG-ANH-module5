import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = '  http://localhost:3000/'

  constructor(private httpClient:HttpClient) { }

  findAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API_URL+'product');
  }
  save(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.API_URL+'product',product);
  }
  findProductEdit(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.API_URL+'product/'+id);
  }

  delete(productId:number):Observable<void>{
    return this.httpClient.delete<void>(this.API_URL+'product/'+productId)
  }
  editProduct(id:number,productEdit:Product):Observable<Product>{
    return this.httpClient.put<Product>(this.API_URL+'product/'+id,productEdit)
  }

  searchName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?name_like=' +name);
  }

}
