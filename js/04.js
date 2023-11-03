/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let numeros = 0;

while (true) {
  let cadena = prompt("Ingrese una cadena:");
  if (cadena !== null) {
    cadena = Number(cadena);
    if (typeof cadena === "number") {
      numeros += cadena;
    } else {
      alert("Formato no valido");
    }
  } else {
    break;
  }
}
if (numeros > 0) {
  document.write("La suma de los numeros ingresados es :" + numeros);
} else {
  document.write("Para obtener una suma debes ingresar numeros");
}
