/** Realiza un script que cuente el número de vocales que tiene un texto */

let contador = 0;
let vocales = ["a", "e", "i", "o", "u"];
let ingresoTexto = prompt("Ingrese un texto");
let textoEnMinusculas = ingresoTexto.toLowerCase();
for (let i = 0; i <= textoEnMinusculas.length; i++) {
  if (vocales.includes(textoEnMinusculas[i])) {
    contador++;
  }
}
document.write(`Cantidad de vocales en la frase : ${contador}`);
