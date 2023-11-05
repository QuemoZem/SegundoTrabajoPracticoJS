/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5                     Output: Suficiente
Input: 50                    Output: Número erróneo
Input: hola10                Output: Introduce un número válido
 */

const notaUsuario = parseInt(prompt("Ingrese una nota entre 0 - 10"));
if (isNaN(notaUsuario)) {
  alert("Ingrese un numero valido, solo numeros");
} else if (typeof notaUsuario === "number") {
  if (notaUsuario >= 0 && notaUsuario <= 2) {
    alert("Muy deficiente");
  } else if (notaUsuario >= 3 && notaUsuario <= 4) {
    alert("Insuficiente");
  } else if (notaUsuario >= 5 && notaUsuario <= 6) {
    alert("Suficiente");
  } else if (notaUsuario === 7) {
    alert("Bien");
  } else if (notaUsuario >= 8 && notaUsuario <= 9) {
    alert("Notable");
  } else if (notaUsuario === 10) {
    alert("Sobresaliente");
  } else if (notaUsuario > 10 || notaUsuario < 0) {
    alert("Numero Erroneo");
  }
}
