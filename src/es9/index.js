// Junio del 2018
// Operador de reposo

const obj = {
  name: "Camilo",
  age: 27,
  country: "CO",
};

let { country, ...all } = obj;
// ...all encapsula el resto del contenido del objeto, en este caso traemos name y con ..all traemos age y country
console.log(country, all);
console.log(all);

const obj2 = {
  name: "Oscar",
  age: 32,
};
const obj3 = {
  ...obj2,
  country: "MX",
};
console.log(obj3);

// Finally

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
  .finally(() => console.log("Finalizo la promesa"));

// Regex

const regexData = /([0-9]{4})-([0-9]{2}) - ([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
