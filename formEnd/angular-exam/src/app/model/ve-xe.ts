import {NhaXe} from "./nha-xe";

export interface VeXe {
  id:number,
  giaVe:number,
  diemDi:string,
  diemDen:string,
  ngayKhoiHanh:string,
  gioKhoiHanh:string,
  nhaXe: NhaXe,
  soLuong:number
}
