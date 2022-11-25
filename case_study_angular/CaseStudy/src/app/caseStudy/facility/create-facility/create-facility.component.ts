import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Facility} from "../../model/Facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  @Output('newFacility') onCreate = new EventEmitter<Facility>();

  constructor(private facilityService: FacilityService) {
  }

  facility: Facility | undefined

  ngOnInit(): void {
  }


  createFacility(facilityId: number,
                 facilityName: string,
                 facilityArea: number,
                 rentCost: number,
                 maxPeople: number,
                 standardRoom: string,
                 descriptionOtherConvenience: string,
                 poolArea: number,
                 numberOfFloors: number,
                 facilityFree: string,
                 rentType: string,
                 facilityType: string,
                 facilityImage: string) {
    this.facility = {
      facilityId: facilityId,
      facilityName: facilityName,
      facilityArea: facilityArea,
      rentCost: rentCost,
      maxPeople: maxPeople,
      standardRoom: standardRoom,
      descriptionOtherConvenience: descriptionOtherConvenience,
      poolArea: poolArea,
      numberOfFloors: numberOfFloors,
      facilityFree: facilityFree,
      rentType: rentType,
      facilityType: facilityType,
      facilityImage: facilityImage
    }
    console.log(this.facility);
    this.facilityService.saveFacility(this.facility);

  }
}
