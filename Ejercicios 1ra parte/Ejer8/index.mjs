// Solicitamos un número al usuario
let numero = parseInt(
  prompt("Introduce un número para la cuenta atrás y hacia delante", "")
);

// Bucle for para la cuenta atrás
document.write("<h3>Cuenta atrás</h3>");
for (let i = numero; i >= 0; i--) {
  document.write(i + "<br>");
}

// Bucle for para la cuenta hacia delante
document.write("<h3>Cuenta hacia adelante</h3>");
for (let i = 0; i <= numero; i++) {
  document.write(i + "<br>");
}
