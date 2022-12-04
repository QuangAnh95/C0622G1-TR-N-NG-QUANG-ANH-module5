import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NhaXe} from "../../model/nha-xe";
import {VeXeService} from "../../service/ve-xe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ve-xe-create',
  templateUrl: './ve-xe-create.component.html',
  styleUrls: ['./ve-xe-create.component.css']
})
export class VeXeCreateComponent implements OnInit {
  veXeFormGroup: FormGroup = new FormGroup({
    giaVe: new FormControl('', Validators.required),
    diemDi: new FormControl('', Validators.required),
    diemDen: new FormControl('', Validators.required),
    ngayKhoiHanh: new FormControl('', Validators.required),
    gioKhoiHanh: new FormControl('', Validators.required),
    nhaXe: new FormControl('', Validators.required),
    soLuong: new FormControl('', Validators.required)
  })

  nhaXeList: NhaXe[];

  constructor(private veXeService: VeXeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.veXeService.findAllNhaXe().subscribe(value => {
      this.nhaXeList = value;
    })
  }

  submit():void {
        const veXe = this.veXeFormGroup.value;
        this.veXeService.save(veXe).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'đặt vé thành công!',
            text: 'Khách hàng: ' + name,
            showConfirmButton: false,
            timer: 2000
          });
          this.veXeFormGroup.reset();
        }, error => {
          console.log(error);

        }, () => {
          this.router.navigateByUrl('');
          console.log('thêm mới khách hành thành công')
        });
  }

}
