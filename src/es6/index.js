// Parametros por defecto : podemos establecer ciertos valores que le pasamos a una funcion de forma por defecto.

function newFunction(name, age, country) {
  var name = name || "Camilo";
  var age = age || "27";
  var country = country;
  console.log({ name, age, country });
}

// ES6
function newFunction2(name = "Camilo", age = 27, country = "COL") {
  console.log(name, age, country);
}
newFunction2();
newFunction2("Oscar", 32, "MX");
console.log();
newFunction2("Carlos", 12, "AR");

// ===== Template Literals
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea
let lorem =
  "lorem ipsum dolor sit ammet. qui taler solem \n" + "Otra frase epica";

let lorem2 = `Otra Frase epica que necesitamos
  ahora es otra frase epica
  y esta es otra frase mucho mas epica`;
console.log({ lorem, lorem2 });

// Desestructuracion
let person = {
  name: "Camilo",
  age: 27,
  country: "CO",
};
let person2 = {
  name: "Christian",
  age: 28,
  country: "MX",
};

console.log(person.name);
console.log(
  `Hola, soy la persona 2, mi nombre es ${person2.name}, tengo ${person2.age} y soy de ${person2.country}`
);
// Para destructutar un objeto Json podemos hacerlo de la siguiente manera:
// definimos una variable y dentro de {asignamos el nombre de las propiedades de cada objeto a las cuales quetemos acceder}
// igualamos la variable o le asignamos el objeto que posee las propiedades.
let { name, age } = person;
let { country } = person;
console.log(name, age, country);
console.log(name, age);
console.log(name);
console.log(age);
console.log(country);

// Haciendo uso de la sintaxis ... podemos unir varios arreglos como lo veremos a continuacion:
let team1 = ["Camilo", "Oscar", "Alejandra"];
let team2 = ["Juliete", "Pedro", "Andres"];

let education = ["David", ...team1, ...team2];
console.log(education);
console.log(education.sort());

// ==== VAR vs LET
// var crea la variable en el entorno global
// let crea la variable para que sea accedida solo dentro del scope

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet); // Esta seccion de codigo retornara error pues no es posible acceder a ella desde el scope global, para ello es necesario acceder a ella desde el mismo bloque de codigo.

// const crea una variable constante que no es posible ser modificada
const a = "B";
a = "A"; // esta linea retornara error pues la constate a no puede ser modificada.

//  =================== Arrow Functions, Promesas y Parámetros en objetos

let name = "Camilo";
let age = 27;
// Antes de ECMAScript6 para asignar una varaible como propiedad de un nuevo objeto lo haciamos de la siguiente forma
obj = {
  name: name,
  age: age,
};
// Despues de ECMAScript6 podemos hacerlo usando la siguiente sintaxis.
obj2 = { name, age };

console.log(obj);
console.log(obj2);

// ===Arrow Functions

const names = [
  { name: "Camilo", age: 27 },
  { name: "Oscar", age: 28 },
];
// Antes de ECMAScript6
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;

// Promesas
// Son acciones que estamos estableciendo y que van a suceder en algun momento
// Para definir una promesa usamos la siguiente sintaxis de
const helloPromise = () => {
  // Las promesas reciben siempre por defecto dos parametros que son resolve y reject
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey! Todo bien");
    } else {
      reject("Ups! Algo Salio mal");
    }
  });
};
// Para llamar a la funcion se usa la siguiente sintaxis:

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola Asincronismo"))
  .catch((error) => console.log(error));

// ====================== Clases, Módulos y Generadores

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumar(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();

console.log(calc.sumar(2, 2));

// Modulos import y export

import { hello } from "./module";
hello();

// Generators
// Es una funcion especiual que retorna una serie de valores segun el alrotimo definido.
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
