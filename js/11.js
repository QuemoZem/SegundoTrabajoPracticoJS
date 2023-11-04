/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. * */

let edadUsuario = 0;
let nombreUsuario = "";
for (let i = 0; i < 3; i++) {
  let ingresoDatoEdad = parseInt(prompt("Ingrese su edad"));
  let ingresoDatoNombre = prompt("Ingrese su nombre");

  if (edadUsuario < ingresoDatoEdad) {
    edadUsuario = ingresoDatoEdad;
    nombreUsuario += ingresoDatoNombre;
  }
}
document.write(
  `El mayor de los 3 es ${nombreUsuario} tiene ${edadUsuario} años`
);
