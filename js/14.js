/**Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l” */

const texto = prompt("Ingresa un texto:");
let textoConGuiones = "";

for (let i = 0; i < texto.length; i++) {
  textoConGuiones += texto[i];
  if (i < texto.length - 1) {
    textoConGuiones += "-";
  }
}

document.write(
  `El texto original "${texto}" y el texto con guiones "${textoConGuiones}"`
);
