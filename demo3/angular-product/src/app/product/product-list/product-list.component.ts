import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import Swal from 'sweetalert2';
import {ProductTypeService} from "../../service/product-type.service";
import {ProductType} from "../../model/product-type";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] | undefined;

  p: number = 1;
  count: number = 3;

  name = '';

  productTypeList:ProductType[];

  constructor(private productService: ProductService,
              private productTypeService:ProductTypeService) {
    this.findAll();
    this.getAllProductType();
  }

   getAllProductType():void {
    this.productTypeService.findAllProductType().subscribe(list=>{
      this.productTypeList=list;
    },error => {
      console.log(error);
    })
  }

  findAll() {
    this.productService.findAllProduct().subscribe(
      data => {
        console.log(data)
        this.productList = data;
        console.log(this.productList[0].productType.productTypename)
      }, error => {
        console.log("Lấy danh sách thất bại")
      }, () => {
        console.log("kết thúc lấy danh sách")
      }
    )
  }


  deleteProduct(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Khách hàng: ' + name + ' (id: ' + id + ').',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((resut) => {
      if (resut.isConfirmed) {
        this.productService.delete(id).subscribe(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "xóa thành công",
            text: 'khách Hàng' + name + '(id:' + id + ').',
            showConfirmButton: false,
            timer: 2000
          });
          this.findAll()
        }, error => {
          console.log(error)
        })
      }
    })
  }


  resetSearchInput(): void {
    this.name = '';

  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  ngOnInit(): void {
  }

  searchName(value: string) {
    this.productService.searchName(value).subscribe(
      data =>{
        this.productList =data;
      },error=>{
        console.log("Lấy danh sách thất bại");
      },() =>{
        console.log("Kết thúc lấy danh sách");
      }
    )

  }
}
