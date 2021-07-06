// ====  INCLUDES
//  permite validar si un dato o valor existe dentro de un arreglo
let number = [1, 2, , 7, 5, 0, 8, 3, 5, 6];

if (number.includes(10)) {
  console.log("Si existe el valor 7");
} else {
  console.log("No se encuentra el numero dentro del arreglo");
}

// Elevar a la potencia

let base = 4;
let exponent = 4;
let result = base ** exponent; // el doble asterisco ** indica que es una potencia o exponente
console.log(result);
