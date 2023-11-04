/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let piramideUsuario = parseInt(prompt("Ingrese un numero entre 0 y 50"));
if (piramideUsuario > 0 && piramideUsuario < 50) {
  let linea = "";
  for (let i = 1; i <= piramideUsuario; i++) {
    linea += i;
    document.write(linea + `<br>`);
  }
}
