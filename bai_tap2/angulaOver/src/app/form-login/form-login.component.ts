import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";


export const reConfirmPass:ValidatorFn=(control:AbstractControl):ValidationErrors | null => {
  const password  =control.get("password");
  const comfirmPassword=control.get("comfirmPassword");
  if (password && comfirmPassword && password.touched && password.value != comfirmPassword.value){
    return {"reConfirmPass" :true}
  }else {
    return null;
  }
}
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
  this.loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    comfirmPassword:new FormControl('',[Validators.required]),
  })
  }

  onSumit() {
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
      }
  }
}
