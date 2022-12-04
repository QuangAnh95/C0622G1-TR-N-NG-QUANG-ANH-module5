import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ProductTypeService} from "../../service/product-type.service";
import {Router} from "@angular/router";
import {ProductType} from "../../model/product-type";
import Swal from "sweetalert2";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    productType: new FormControl('', Validators.required)
  })
  productTypeList: ProductType[];

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productTypeService.findAllProductType().subscribe(value => {
      this.productTypeList = value;
    })
  }

  sumit(): void {
    const product = this.productFormGroup.value;
    this.productService.save(product).subscribe(() => {
      Swal.fire({
        title: 'thêm mới thành công',
        text: 'Sản phẩm' + product.name,
        imageUrl: 'https://www.dungplus.com/wp-content/uploads/2019/12/hinh-nen-dien-thoai-1-564x400.jpg',
        imageHeight: '250',
        imageWidth: '400',
      });
      this.productFormGroup.reset();
    },error => {
      console.log(error);
    },()=>{
      this.router.navigateByUrl('');
      console.log('Thêm mới thành công')
    })
  }

}
