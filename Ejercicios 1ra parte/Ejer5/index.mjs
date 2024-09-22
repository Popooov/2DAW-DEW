function saludar() {
    // Obtenemos el valor del input
    let nombre = document.getElementById("nombre").value;
  
    // Condicional para comprobar si el campo está vacío
    nombre === ""
      ? (document.getElementById("saludo").innerText = "hola")
      : (document.getElementById("saludo").innerText = nombre);
  }
  
  document.getElementById("saludarBtn").addEventListener("click", saludar);
  