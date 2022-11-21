import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1:number;
  num2:number;
  resul:any;

  constructor() { }

  ngOnInit(): void {
  }

  getAddition(){
    this.resul = this.num1+ this.num2
}
  getSubtraction(){
    this.resul= this.num1-this.num2
  }

  getMultiplication(){
    this.resul=this.num1*this.num2
  }

  getDivision(){
    if (this.num2==0){
      this.resul="unachievable";
    }
    else {
      this.resul=this.num1/this.num2
    }
  }
}
