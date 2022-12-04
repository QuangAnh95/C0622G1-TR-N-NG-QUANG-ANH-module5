import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../model/product-type";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private API_URL = '  http://localhost:3000/'

  constructor(private httpClient:HttpClient) { }

  findAllProductType():Observable<ProductType[]>{
    return this.httpClient.get<ProductType[]>(this.API_URL+'productType')
  }
}
