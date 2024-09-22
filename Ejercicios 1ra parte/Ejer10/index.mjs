const app = document.getElementById("app");
// Bucle que genera la pirámide del 1 al 50
for (let i = 1; i <= 50; i++) {
  var fila = ""; // Variable para almacenar la fila actual

  // Concatenamos el número i, i veces
  for (let j = 1; j <= i; j++) {
    fila += i; // Agregamos el número i a la fila
  }

  // Mostramos la fila en el documento HTML
  app.innerHTML += fila + "<br>";
}
