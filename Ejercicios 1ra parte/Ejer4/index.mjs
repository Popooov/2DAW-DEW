function saludar() {
  // Obtenemos el valor del input
  let nombre = document.getElementById("nombre").value;

  // Condicional para comprobar si el campo está vacío
  if (nombre === "") {
    document.getElementById("saludo").innerText = "hola";
  } else {
    document.getElementById("saludo").innerText = nombre;
  }
}

document.getElementById("saludarBtn").addEventListener("click", saludar);
