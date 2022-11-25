import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Lào'},
    {id: 3, name: 'Mỹ'},
    {id: 4, name: 'Thái Lan'},
    {id: 5, name: 'Trung Quốc'}
  ]
  registerFormGroup: FormGroup;
  country: any;

  constructor() {
  }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required,])
      }, this.checkConfirmPassword),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[+]84[0-9]{9,10}')])
    });
  }

  checkConfirmPassword(abstractControl: AbstractControl): any {
    const formPassword = abstractControl.value;
    return formPassword.password === formPassword.confirmPassword ? null : {passwordNotSame: true}
  }

  getRegisterInfor(): void {
    console.log('Thông tin đăng ký');
    console.log(this.registerFormGroup.value);
  }

}
