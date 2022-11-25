import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  _facility= this.facilityService.findAll().splice(0,3);
  curPage= 1;
  totalPage = Math.ceil(this.facilityService.findAll().length/3);

  facilityNameDelete: string;
  facilityImageDelete:string;
  facilityIdDelete:number;


  constructor(private facilityService:FacilityService) { }

  ngOnInit(): void {
  }

  next():void{
    this.curPage++;
      this._facility=this.facilityService.findAll().slice((this.curPage-1)*3,this.curPage*3);
  }
  previos():void{
    this.curPage--;
    this._facility=this.facilityService.findAll().slice((this.curPage-1)*3,this.curPage*3);
  }

  getInforFacilityDelete(facilityName:string,facilityImge:string,facilityId:number){
    this.facilityNameDelete = facilityName;
    this.facilityImageDelete = facilityImge;
    this.facilityIdDelete = facilityId;
  }

  deleteFacility():void{
    this.facilityService.deleteFacility(this.facilityIdDelete);
    this.totalPage=Math.ceil(this.facilityService.findAll().length/3);
    this._facility=this.facilityService.findAll().slice((this.curPage-1)*3,this.curPage*3);
    alert('Xóa dịch vụ ['+this.facilityNameDelete+'] thành công');
  }

}
