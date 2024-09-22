function compararNumeros() {
  // Obtenemos los valores de los inputs
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  // Realizamos la comparación
  if (num1 > num2) {
    document.getElementById("resultado").innerText =
      "El primer número es mayor que el segundo.";
  } else if (num1 < num2) {
    document.getElementById("resultado").innerText =
      "El primer número es menor que el segundo.";
  } else {
    document.getElementById("resultado").innerText =
      "Ambos números son iguales.";
  }
}

document
  .getElementById("compararBtn")
  .addEventListener("click", compararNumeros);
