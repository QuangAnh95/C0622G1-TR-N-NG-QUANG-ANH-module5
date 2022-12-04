import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VeXe} from "../model/ve-xe";
import {NhaXe} from "../model/nha-xe";
import {DataResult} from "../model/data-result";
import {IVeXeDto} from "../model/ive-xe-dto";

@Injectable({
  providedIn: 'root'
})
export class VeXeService {
  private API_URL = '  http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
  }

  findAll(curPage: number, numberRecord: number, diemDenSearch: string, diemDiSearch: string, gioSearch: string): Observable<DataResult<IVeXeDto>> {
    return this.httpClient.get<DataResult<IVeXeDto>>(this.API_URL + 'list?page=' + (curPage - 1) + '&size=' + numberRecord +
      '&diemDiSearch=' + diemDiSearch + '&diemDenSearch=' + diemDenSearch + '&gioSearch=' + gioSearch);
  }

  findAllNhaXe(): Observable<NhaXe[]> {
    return this.httpClient.get<NhaXe[]>(this.API_URL + 'nhaXe');
  }

  save(veXe: VeXe): Observable<VeXe> {
    return this.httpClient.post<VeXe>(this.API_URL + 'veXe', veXe);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + 'delete/' + id)
  }

  update(id: number, veXe: VeXe): Observable<VeXe> {
    console.log(this.API_URL + 'edit/' + id, veXe)
    return this.httpClient.patch<VeXe>(this.API_URL + 'edit/' + id, veXe);
  }

  findById(id: number): Observable<VeXe> {
    return this.httpClient.get<VeXe>(this.API_URL + 'findById/' + id);
  }

  nhaXeList(): Observable<NhaXe[]> {
    return this.httpClient.get<NhaXe[]>(this.API_URL + 'nhaXe-list');
  }

}
