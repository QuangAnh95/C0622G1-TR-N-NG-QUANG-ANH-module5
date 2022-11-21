var nbx = 20;
var number1 = 0;
var number2 = 1;
var number3;
var numberF = number1 + "," + number2;
for (var i = 3; i < nbx; i++) {
    number3 = number1 + number2;
    numberF += "," + number3;
    number1 = number2;
    number2 = number3;
}
console.log(numberF);
