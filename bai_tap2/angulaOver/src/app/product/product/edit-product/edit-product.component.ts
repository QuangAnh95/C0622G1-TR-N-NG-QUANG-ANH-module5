import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";
import swal from 'sweetalert';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('productId');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(value => {
      this.productForm = new FormGroup({
        name: new FormControl(value.name),
        price: new FormControl(value.price),
        description: new FormControl(value.description),
        category: new FormControl(value.category)
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      swal({
        title: 'CHÚC MỪNG!',
        text: 'Cập nhập thành công!',
        icon: 'success',
        timer: 2000,
      });
      this.router.navigateByUrl('product');
    }, error => {
      console.log(error);
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
