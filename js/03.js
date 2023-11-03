/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm()
 */

let cadenas = "";

while (true) {
  const cadena = prompt("Ingrese una cadena:");

  if (cadena !== null) {
    cadenas += cadena + " - ";
  } else {
    break;
  }
}
cadenas = cadenas.slice(0, cadenas.length - 2);
document.write(cadenas);
