var x = 10;
var y = 20;
var z = 30;

/*
Matematiksel operatorler
*/

console.log(x + y); //30
console.log(x - y); //-10
console.log(x / y); //0.5
console.log(x * y); //200

/* Karşılaştırma Operatorleri */

console.log(x > y); //false
console.log(x < y); //true
console.log(x >= y); //false
console.log(x <= y); //true
console.log(x != y); //true
console.log(x == "10"); //true
console.log(x === "10"); //false

/* Mantıksal Operatorler */

console.log(x > z && x < y); //false
console.log(x > z || x < y); //true
console.log(!(x > z)); //true