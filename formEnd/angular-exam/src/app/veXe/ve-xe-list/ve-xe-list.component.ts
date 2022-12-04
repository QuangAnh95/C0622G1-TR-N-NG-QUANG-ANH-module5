import {Component, OnInit} from '@angular/core';
import {VeXeService} from "../../service/ve-xe.service";
import {BehaviorSubject, Observable} from "rxjs";
import {IVeXeDto} from "../../model/ive-xe-dto";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ve-xe-list',
  templateUrl: './ve-xe-list.component.html',
  styleUrls: ['./ve-xe-list.component.css']
})
export class VeXeListComponent implements OnInit {
  page = 1;
  pageSize = 5;
  diemDen = '';
  diemDi = '';
  gioDi = '';
  action: boolean;
  diemDiDelete = '';
  idDelete: number;
  diemDenDelete = '';
  tongTien: number;
  chon : number;

  total$: Observable<number>;
  iveXeDto$: BehaviorSubject<IVeXeDto[]>;


  constructor(private veXeService: VeXeService) {

  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.veXeService.findAll(this.page, this.pageSize, this.diemDi, this.diemDen, this.gioDi).subscribe(value => {
      console.log('a')
      if (value != null) {
        this.action = true;
        this.total$ = new BehaviorSubject<number>(value.totalElements);
        this.iveXeDto$ = new BehaviorSubject<IVeXeDto[]>(value.content);
      } else {
        this.action = false;
      }
    })
  }


  searchByMore() {
    console.log(this.diemDi)
    this.findAll();
    console.log('a')
  }

  confirmDelete(value) {
    console.log(value)
    this.diemDiDelete = value.diemDi;
    this.diemDenDelete = value.diemDen;
    this.idDelete = value.id;
    this.tongTien =value.giaVe * value.soLuong ;
    Swal.fire({
      title: 'Bạn có muốn xóa vé này không ?' + this.tongTien,
      text: 'Tác vụ này không thể hoàn tác !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng Ý',
      cancelButtonText: 'Hủy Bỏ',
    }).then((result) => {
      if (result.isConfirmed) {
        this.veXeService.delete(this.idDelete).subscribe(value1 => {
          console.log(this.idDelete);
          Swal.fire(
            'Đã xóa!',
            'Thông tin này đã được xóa.'
          );
          this.page = 1;
          this.ngOnInit();
        });
      }
    });
  }
}
