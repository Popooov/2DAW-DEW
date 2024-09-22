const app = document.getElementById("app");

let i = 1;

while (i <= 6) {
  app.innerHTML += `<h${i}>Encabezado de nivel ${i} </h${i}>`;

  i++;
}
