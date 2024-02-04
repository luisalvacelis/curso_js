const numSecret = Math.floor(Math.random() * 10 + 1);
const numPlayer = parseInt(prompt("Adivina el número del 1 al 10"));
console.log(`Este es el número con el que juegas ${numPlayer}`);
if (numPlayer === numSecret) {
  console.log("Felicidades!, adivinaste el número secreto.");
} else if (numPlayer < numSecret) {
  console.log("El número es demaciado bajo, intentalo de nuevo.");
} else if (numPlayer > numSecret) {
  console.log("El número es demaciado alto, intentarlo de nuevo");
}
