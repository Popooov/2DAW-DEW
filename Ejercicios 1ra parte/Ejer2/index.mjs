// Ejercicio 2
let x;
let y;
let z;

document.getElementById("app").innerHTML = `
<p>
    <strong>Ejercicio 2:</strong> La función typeof() devuelve el tipo de una variable. 
    Hacer un script que te diga el tipo de un par de variables, sin inicializarlas y posteriormente
    con un valor (string, number y boolean).
</p>

<p>Antes</p>
<p>El tipo de x antes de inicializar es: "${typeof x}"</p>
<p>El tipo de y antes de inicializar es: "${typeof y}"</p>
<p>El tipo de z antes de inicializar es: "${typeof z}"</p>
`;

x = "cadena";
y = 5;
z = true;

document.getElementById("app").innerHTML += `
<p>Después</p>
<p>El tipo de x después de inicializar es: ${typeof x}</p>
<p>El tipo de y después de inicializar es: ${typeof y}</p>
<p>El tipo de z después de inicializar es: ${typeof z}</p>
`;