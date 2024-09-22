// Ejercicio 1

const str1 = "Hola";
const str2 = "mundo!";
const str3 = str1 + " " + str2;

document.getElementById("app").innerHTML = `
<p>
    <strong>Ejercicio 1:</strong> Realiza una página en la que crees dos variables “string”, 
    las “sumes” e imprimas el resultado.
</p>
<p>Variable str1: "${str1}"</p>
<p>Variable str2: "${str2}"</p>
<p>El resultado: "${str3}"</p>
`;
