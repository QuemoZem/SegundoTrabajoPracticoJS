/**Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */

let ingresoFrase = prompt("Ingrese su frase");
let vocalesComparar = "aeiou";

for (let i = 0; i < ingresoFrase.length; i++) {
  if (vocalesComparar.includes(ingresoFrase[i].toLowerCase())) {
    document.write(
      `La primera vocal encontrada es ${ingresoFrase[i]} en la posición ${i}`
    );
    break;
  }
}
