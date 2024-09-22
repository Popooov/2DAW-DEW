const app = document.getElementById("app");
// Variable para almacenar la pirámide
let piramide = "";

// Bucle que genera la pirámide
for (let i = 1; i <= 50; i++) {
  // Para cada fila, concatenamos los números desde 1 hasta i
  for (let j = 1; j <= i; j++) {
    piramide += j;
  }
  // Insertamos un salto de línea después de cada fila
  piramide += "<br>";
}

app.innerHTML = piramide;
