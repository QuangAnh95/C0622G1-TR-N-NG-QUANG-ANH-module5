let nbx :number = 20;
let number1 :number = 0;
let number2:number = 1;
let number3:number;
let numberF:string = number1  + "," + number2;
for (let i = 3 ; i <  nbx   ; i++){
    number3 = number1 + number2;
    numberF += "," + number3;
    number1 = number2;
    number2 = number3;
} console.log(numberF);