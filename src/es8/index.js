// Object.entries
const data = {
  frontend: "Camilo",
  backend: "Oscar",
  desing: "Ana",
};

const entries = Object.entries(data); //Retorna un arreglo de arreglos con las llaves y los valores del objeto JSON
console.log(entries);
console.log(entries.length);

// Object.values
const data2 = {
  frontend: "Camilo",
  backend: "Oscar",
  desing: "Ana",
};
const values = Object.values(data2); // Retorna un arreglo con todos los values que existen dentro del objeto JSON
console.log(values);
console.log(values.length);

// Padding
// nos permite agregar mas caracteres dentro de un string, este emetodo recibe dos parametros el primero un numero con la cantidad maxima de caracteres que tendra y el segundo, los caracteres que desea agregar
const string = "Hello!";
console.log(string.padStart(8, "hi"));
console.log(string.padEnd(12, "-------"));
console.log("food".padEnd(10, " ------"));

// Trailing-Comas.
const obj = {
  name: "Oscar",
};

// =============== Async Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
