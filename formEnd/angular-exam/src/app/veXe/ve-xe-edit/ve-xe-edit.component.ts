import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VeXeService} from "../../service/ve-xe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NhaXe} from "../../model/nha-xe";
import Swal from "sweetalert2";
import {VeXe} from "../../model/ve-xe";

@Component({
  selector: 'app-ve-xe-edit',
  templateUrl: './ve-xe-edit.component.html',
  styleUrls: ['./ve-xe-edit.component.css']
})
export class VeXeEditComponent implements OnInit {
  id: number;
  veXeFormGroup: FormGroup;
  nhaXeList: NhaXe[];
  veXe: VeXe;

  constructor(private veXeService: VeXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.update()
    this.nhaXe();
  }

  update() {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.veXeService.findById(this.id).subscribe(value => {
      // this.veXeFormGroup.patchValue(value);

      this.veXeFormGroup = new FormGroup({
        id: new FormControl(value.id, Validators.required),
        giaVe: new FormControl(value.giaVe, Validators.required),
        diemDi: new FormControl(value.diemDi, Validators.required),
        diemDen: new FormControl(value.diemDen, Validators.required),
        ngayKhoiHanh: new FormControl(value.ngayKhoiHanh, Validators.required),
        gioKhoiHanh: new FormControl(value.gioKhoiHanh, Validators.required),
        nhaXe: new FormControl(value.nhaXe, Validators.required),
        soLuong: new FormControl(value.soLuong, Validators.required)
      })
    })
  }

  nhaXe() {
    this.veXeService.nhaXeList().subscribe(value => {
      this.nhaXeList = value;
    })
  }


  submit(id: number) {
    const veXe = this.veXeFormGroup.value;
    this.veXeService.update(id, veXe).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Chỉnh sửa  thành công!',
        width: 600,
        padding: '3em',
        color: '#716add'
      });

    })
    this.router.navigateByUrl('')
    this.ngOnInit()
  }

  comparWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }
}
