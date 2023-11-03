/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si 
la edad ingresada no es un número válido indicarlo en un mensaje. */

const edadUsuario = parseInt(prompt("Ingrese su edad"));

if (typeof edadUsuario === "Number") {
  if (edadUsuario > 18) {
    document.write("Usted puede conducir");
  }
} else if (isNaN(edadUsuario)) {
  document.write("El formato ingresado no es valido, ingrese solo numeros");
}
