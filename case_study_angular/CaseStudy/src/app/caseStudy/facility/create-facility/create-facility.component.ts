import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityFormGroup: FormGroup = new FormGroup({
    facilityId: new FormControl(''),
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });

  facilityTypeList: string[] = ['Villa', 'House', 'Room'];
  rentTypeList: string[] = ['Giờ', 'Ngày', 'Tháng', 'Năm'];

  idAuto = this.facilityService.findAll()[this.facilityService.findAll().length - 1].facilityId + 1;

  status: string;

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.saveFacility(facility);
    alert('Thêm mới dịch vụ  [' + facility.facilityName + ']  thành công!');
    this.facilityFormGroup.reset();
    this.router.navigateByUrl('facility');
    this.idAuto++;
  }

}
