import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {ProductType} from "../model/product-type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = '  http://localhost:3000/'

  constructor(private httpClient: HttpClient) {
  }

  findAllProductSearch(nameSearch: string, priceSearch: string, typeSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?name_like=' + nameSearch +
      '&productType.productTypename_like=' + typeSearch + '&price_like=' + priceSearch)
  }

  findCustomerSearchPaging(numberRecord: number, curPage: number, nameSearch: string, priceSearch: string, typeSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?_page=' + curPage + '&_limit=' + numberRecord +
      '&name_like=' + nameSearch + '&productType.productTypename_like=' + typeSearch + '&price_like=' + priceSearch)
  }

  deleteProduct(id:number):Observable<Product>{
    return  this.httpClient.delete<Product>(this.API_URL+'product/'+id);
  }

  findAllProductType():Observable<ProductType[]>{
    return this.httpClient.get<ProductType[]>(this.API_URL+'productType');
  }

  addProduct(product):Observable<Product>{
    return this.httpClient.post<Product>(this.API_URL+'product',product);
  }

  getById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.API_URL+'product/'+id);
  }

  updateProduct(id:number,product:Product):Observable<Product>{
    return this.httpClient.put<Product>(this.API_URL+'product/'+id,product);
  }
}
