/** Ejercicio extra */

let saldo = 0;
let extraccion = 0;

while (true) {
  let opcion = prompt(
    `Ingrese una opcion:\n1) Consultar Saldo\n2) Ingresar Dinero\n3) Extraer Dinero\n4)- Salir`
  );
  switch (opcion) {
    case "1":
      consultarSaldo();
      break;
    case "2":
      ingresarDinero();
      break;
    case "3":
      extraerDinero();
      break;
    case "4":
      break;

    default:
      alert("La opcion ingresada es incorrecta");
  }
  if (opcion == 4) {
    break;
  }
}
document.write(
  `<h2>Gracias por usar nuestro sistema de cajeros automaticos</h2>`
);
function consultarSaldo() {
  alert(`Su saldo es de ${saldo}`);
}

function ingresarDinero() {
  let montoIngreso = parseInt(
    prompt("Ingrese la cantidad de dinero a ingresar:")
  );

  if (!isNaN(montoIngreso) && montoIngreso > 0) {
    saldo += montoIngreso;
    alert(`Su saldo actual es: ${saldo}`);
  } else {
    alert("Ingrese un monto válido.");
  }
}

function extraerDinero() {
  let montoExtraccion = parseInt(
    prompt("Ingrese la cantidad de dinero a extraer:")
  );

  if (
    !isNaN(montoExtraccion) &&
    montoExtraccion > 0 &&
    saldo >= montoExtraccion
  ) {
    saldo -= montoExtraccion;
  } else if (saldo < montoExtraccion) {
    alert("No hay suficiente saldo para realizar la extracción.");
  } else {
    alert("Ingrese un monto válido.");
  }
}
