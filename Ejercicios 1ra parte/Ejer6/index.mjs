const app = document.getElementById("app");

for (let i = 1; i <= 6; i++) {
  app.innerHTML += `<h${i}>Encabezado de nivel ${i} </h${i}>`;
}
