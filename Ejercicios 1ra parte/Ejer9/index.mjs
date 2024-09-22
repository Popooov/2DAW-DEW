// Solicitamos un número al usuario
let numero = parseInt(
  prompt("Introduce un número para la cuenta atrás y hacia delante", "")
);

// Cuenta atrás con un bucle while
document.write("<h3>Cuenta Atrás</h3>");
let i = numero;
while (i >= 0) {
  document.write(i + "<br>");
  i--;
}

// Cuenta hacia delante con un bucle while
document.write("<h3>Cuenta Hacia Adelante</h3>");
i = 0;
while (i <= numero) {
  document.write(i + "<br>");
  i++;
}
