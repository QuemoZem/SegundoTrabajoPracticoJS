/**Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

let ingresFrase = prompt("Ingrese su frase");
let fraseAlReves = ingresFrase.split("").reverse().join("");
document.write(
  `La frase original es "${ingresFrase}" y al reves  es "${fraseAlReves}"`
);
