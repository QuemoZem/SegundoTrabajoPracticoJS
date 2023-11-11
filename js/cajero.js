/** Ejercicio extra */

let saldo = 0;
let extraccion = 0;

let opcion = prompt(
  `Ingrese una opcion:\n1) Consultar Saldo\n2) Ingresar Dinero\n3) Extraer Dinero`
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
  default:
    alert("La opcion ingresada es incorrecta");
}

function consultarSaldo() {
  document.write(`Su saldo es de ${saldo}`);
}

function ingresarDinero() {
  let montoIngreso = parseInt(
    prompt("Ingrese la cantidad de dinero a ingresar:")
  );

  if (!isNaN(montoIngreso) && montoIngreso > 0) {
    saldo += montoIngreso;
    document.write(`Su saldo actual es: ${saldo}`);
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
