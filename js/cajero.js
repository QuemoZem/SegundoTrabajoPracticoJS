/** Ejercicio extra */

let opcion = prompt(
  `Ingrese una opcion : \n 1)- Consultar Saldo \n 2)- Ingresar Dinero \n 3)- Extraer Dinero`
);
let saldo = 0;
let extraccion = 0;

switch (opcion) {
  case "1":
    document.write(` Su saldo es de ${saldo}`);
    break;
  case "2":
    saldo = parseInt(prompt("cuanto dinero desea ingresar?"));
    document.write(`Su saldo actual es : ${saldo}`);
    break;
  case "3":
    extraccion = parseInt(prompt("Cuanto dinero desea Extraer?"));
    if (saldo > 0 && saldo > extraccion) {
      saldo = saldo - extraccion;
    } else {
      alert("No hay plata amigo");
    }
    break;
  default:
    alert("La opcion ingresada es incorrecta");
}
