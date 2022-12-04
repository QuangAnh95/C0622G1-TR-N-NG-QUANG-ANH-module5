import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../model/product-type";
import Swal from "sweetalert2";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormGroup: FormGroup;
  productId: number;
  productTypeList: ProductType[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllProductType().subscribe(value => {
      this.productTypeList = value;
    });
    this.productId = Number(this.activatedRoute.snapshot.params.id);
    this.productService.getById(this.productId).subscribe(customer=>{
      this.productFormGroup=new FormGroup({
        name:new FormControl(customer.name,Validators.required),
        price:new FormControl(customer.price,Validators.required),
        productType:new FormControl(customer.productType,Validators.required)
      });
    },error => {
      console.log(error);
    },()=>{
      console.log('OK!')
    });
  }

  updateProduct(id:number){
    const product =this.productFormGroup.value;
    this.productService.updateProduct(id,product).subscribe(()=>{
      Swal.fire({
        title:'Chỉnh sửa thành công',
        text:'Sản phẩm'+product.name,
        imageUrl:'https://www.dungplus.com/wp-content/uploads/2019/12/hinh-nen-dien-thoai-1-564x400.jpg',
        imageHeight:'250',
        imageWidth:'400',
      });
      this.router.navigateByUrl('');
    },error => {
      console.log(error)
    },()=>{
      console.log('cập nhật thành công');
    })
  }
  compareWithId(item1,iteam2){
    return item1 && iteam2 && item1.id === iteam2.id;
  }
}
