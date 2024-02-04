let secretWord = "javascript";
let intent = 3;

function verifySuposition(suposition, secretWord) {
  if (suposition.toLowerCase() === secretWord) {
    return true;
  }
  return false;
}

function playGuessWord() {
  alert("Bienvenido a jugar adivina la palabra oculta");
  alert("Tienes 3 intentos para adivinar la palabra");
  alert("-pista- la palabra oculta es un lenguaje de programación");
  while (intent > 0) {
    let suposition = prompt("Adivina la palabra: ");
    if (verifySuposition(suposition, secretWord)) {
      alert("Correcto, has adivinado la palabra.");
      break;
    } else {
      intent--;
      if (intent > 0) {
        alert("Icorrecto, aun tienes ${intent} intentos restantes.");
      } else {
        alert("Agostaste tus intentos, la palabra secreta era ${secretWord}.");
      }
    }
  }
}
