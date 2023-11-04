/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let ingresoUsuario = parseInt(prompt("Ingrese un numero entre 0 y 50"));

if (ingresoUsuario > 0 && ingresoUsuario < 50) {
  for (let i = ingresoUsuario; i > 0; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    document.write(linea + ` <br>`);
  }
}
