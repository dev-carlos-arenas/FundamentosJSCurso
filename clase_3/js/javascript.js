var edad = 32;

edad = edad + 1;

console.log(edad);

var precioDeVino = 200.3;

// Redondeo de un número
var total = Math.round(precioDeVino * 3 * 100)/100;

// Convertir de número a string con 2 decimales
var strTotal = total.toFixed(2);

// Convertir string a float
var dblTotal = parseFloat(strTotal);

console.log(total);
console.log(strTotal);
console.log(dblTotal);

