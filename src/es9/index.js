// Junio del 2018
//=======================  Operador de reposo // Spread Operator

const obj = {
  name: "Camilo",
  age: 27,
  country: "CO",
};

let { country, ...all } = obj;
// ...all por defecto encapsula el resto del contenido del objeto, en este caso traemos name y con ..all traemos age y country
console.log(country, all);
console.log(all);

const obj2 = {
  name: "Oscar",
  age: 32,
};
const obj3 = {
  ...obj2, // con esta linea estamos indicando que obj3, tendra los mismos atributos de obj2
  country: "MX",
};
console.log(obj3);

// ==================  Finally
// Finally se utiliza en la implementacion de las promesas. este permite al desarrollador ejecutar lineas de codigo cuando la promesa ya ha terminado por completo su ejecucion

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo la promesa")); // linea de ejecucion de finally

// Regex

const regexData = /([0-9]{4})-([0-9]{2}) - ([0-9]{2})/; //Expersion regular que indica los datos aceptados [] y la cantidad de digitos que debe tener {}
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
