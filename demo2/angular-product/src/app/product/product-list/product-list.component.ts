import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../model/product-type";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  nameSearch='';
  typeSearch='';
  priceSearch='';
  productType:ProductType[];
  productListPaging:Product[];
  numberRecord=3;
  curpage=1;
  totalPage:number;
  p:number = 1;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProductType();
    this.getAllProductPaging();
  }

  private getAllProductType():void {
      this.productService.findAllProductType().subscribe(list=>{
        this.productType=list;
      },error => {
        console.log(error);
      })
  }

  private getAllProductPaging():void {
    if(this.priceSearch == null){
      this.priceSearch="";
    }
   this.priceSearch = this.priceSearch+"";
    console.log("price: " + this.priceSearch +""+ typeof this.priceSearch)
    this.productService.findAllProductSearch(this.nameSearch,this.priceSearch,this.typeSearch).subscribe(list=>{
      this.totalPage=Math.ceil(list.length/this.numberRecord);
    },error => {
      console.log(error);
    })
    this.productService.findCustomerSearchPaging(this.numberRecord,this.curpage,this.nameSearch,this.priceSearch,this.typeSearch).subscribe(pagingList=>{
      this.productListPaging=pagingList;
    },error => {
      console.log(error);
    },()=>{
      console.log('Hiển thị sản phẩm ở trang'+this.curpage);
    })
  }

  next():void{
    this.curpage++;
    this.getAllProductPaging();
  }

  previos():void{
    this.curpage--;
    this.getAllProductPaging();
  }

  compareWithId(item1,item2):boolean{
    return item1 && item2 && item1.id ===item2.id;
  }

    resetSearchInput():void{
      this.nameSearch='';
      this.typeSearch='';
      this.priceSearch='';
    }

  searchByMore():void {
    console.log(this.nameSearch)
    this.curpage=1;
    this.getAllProductPaging();
  }

  deleteProduct(id:number,name:string):void{
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Khách hàng: ' + name + ' (id: ' + id + ').',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result)=>{
      if (result.isConfirmed){
        this.productService.deleteProduct(id).subscribe(()=>{
          Swal.fire({
            position:"center",
            icon:"success",
            title:"xóa thành công",
            text: 'khách Hàng'+name+ '(id:' +id + ').',
            showConfirmButton:false,
            timer:2000
          });
          this.curpage=1;
          this.getAllProductPaging();
        },error => {
          console.log(error)
        });
      }
    });
  }
}



