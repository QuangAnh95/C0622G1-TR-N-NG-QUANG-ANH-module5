import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../mvc/service/product/product.service";
import {Product} from "../../mvc/model/Product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.products=this.productService.getAll();
  }

}
