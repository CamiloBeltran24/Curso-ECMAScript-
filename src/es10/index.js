// flat
// Imprime la profundidad o los niveles de arreglos o matrices. se le debe indicar la cantidad de niveles o profundidad sobre la que quieres trabajr en la matriz
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());
console.log(array.flat(2));

// FlatMap (este metodo nos permite mapear todos los elementos del Array para asi poder operarlos, [retorna otro array])
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

// TrimStart
// Elimina los espacios en blanco al inicio de un string
let hello = "              hello world";

console.log(hello);
console.log(hello.trimStart());

// TrimEnd
// Elimina los espacios en blanco al final del string
let hello2 = "hello World!             ";
console.log(hello2);
console.log(hello2.trimEnd());

// Trim
// Elimina los espacios en blanco tanto al final como al comienzo del string
let hello3 = "             hello World!             ";
console.log(hello3.trim());

//
// podemos pasar de forma opcional el parametro de error al valor de catch

try {
} catch {
  // ya no hay necesidad de pasar el parametro error al catch dentro de () ya estara disponible dentro del bloque del catch
  error;
}

//Object.fromEntries()
// Esta expresión retorna un objeto partiendo de los valores de un array, mientras que object.entries() es lo contrario.
let entries = [
  ["name", "Oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

// description
// permite regresar el descripcion opcional del Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
