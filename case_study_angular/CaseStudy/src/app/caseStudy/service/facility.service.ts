import { Injectable } from '@angular/core';
import {Facility} from "../model/Facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private _facility: Facility[]=[
    {
      facilityId: 1,
      facilityName: 'Studio Queen Script',
      facilityArea: 100,
      rentCost: 500000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_studioroom_ibe4.jpg'
    },
    {
      facilityId: 2,
      facilityName: 'Superior Angular',
      facilityArea: 150,
      rentCost: 400000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_Superior.jpg'
    },
    {
      facilityId: 3,
      facilityName: 'Deluxe Ajax',
      facilityArea: 200,
      rentCost: 1000000,
      maxPeople: 3,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe-Deluxe-Room.jpg'
    },
    {
      facilityId: 4,
      facilityName: 'Villa Beach Back Jquery',
      facilityArea: 1200,
      rentCost: 7500000,
      maxPeople: 7,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 80,
      numberOfFloors: 4,
      facilityFree: '',
      rentType: 'Ngày',
      facilityType: 'Villa',
      facilityImage: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/02/8e/d7/b8.jpg'
    },
    {
      facilityId: 5,
      facilityName: 'Villa Beach Front Thymeleaf',
      facilityArea: 2000,
      rentCost: 10500000,
      maxPeople: 8,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 100,
      numberOfFloors: 4,
      facilityFree: '',
      rentType: 'Ngày',
      facilityType: 'Villa',
      facilityImage: 'https://pix10.agoda.net/hotelImages/2601996/0/7b0a95ae1cbf0f0650ff89ff15cbfbfb.jpg?ca=7&ce=1&s=1024x768'
    },
    {
      facilityId: 6,
      facilityName: 'Spring Framework House 01',
      facilityArea: 500,
      rentCost: 7000000,
      maxPeople: 5,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có ghế tình yêu',
      poolArea: 0,
      numberOfFloors: 3,
      facilityFree: '',
      rentType: 'Tháng',
      facilityType: 'House',
      facilityImage: 'https://i.pinimg.com/736x/a7/b3/c6/a7b3c60afae4a89a3fb12fc8d054156d.jpg'
    },
    {
      facilityId: 7,
      facilityName: 'Family Room Static',
      facilityArea: 300,
      rentCost: 1500000,
      maxPeople: 4,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Đánh bài quỳ vỏ mít',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_Family.jpg'
    },
    {
      facilityId: 8,
      facilityName: 'Premier Family Room',
      facilityArea: 300,
      rentCost: 1250000,
      maxPeople: 4,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Dắt chó đi dạo',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_studioroom_ibe9.jpg'
    },
    {
      facilityId: 9,
      facilityName: 'Executive Suite',
      facilityArea: 150,
      rentCost: 350000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_frf_Executive-Suite.jpg'
    },
    {
      facilityId: 10,
      facilityName: 'Executive Family Suite',
      facilityArea: 150,
      rentCost: 350000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_ibe_Executive-Family-Suite.jpg'
    },
    {
      facilityId: 11,
      facilityName: 'Deluxe Tropical',
      facilityArea: 80,
      rentCost: 200000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/Tropical-Deluxe_IBE.jpg'
    },
    {
      facilityId: 12,
      facilityName: 'Studio Classic',
      facilityArea: 90,
      rentCost: 1000000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_studioroom_ibe14.jpg'
    },
    {
      facilityId: 13,
      facilityName: 'Executive Club',
      facilityArea: 250,
      rentCost: 550000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_Exec_Club.jpg'
    }
  ]


  get facility(): Facility[] {
    return this._facility;
  }

  set facility(value: Facility[]) {
    this._facility = value;
  }

  constructor() { }

  findAll():Facility[]{
    return this._facility;
  }
  saveFacility(_facility:Facility){
    this._facility.unshift(_facility);
  }

  findById(id:number):Facility{
    return this._facility.find(item=>item.facilityId===id);
  }

  updateFacility(id:number,_facility:Facility):void{
    for (let i=0;i<this._facility.length;i++){
      if (this._facility[i].facilityId===id){
        this._facility[i]= _facility;
        break;
      }
    }
  }

  deleteFacility(id:number):void{
    for (let i=0;i<this._facility.length;i++){
      if(this._facility[i].facilityId===id){
        this._facility.splice(i,1);
        break;
      }
    }
  }
}
