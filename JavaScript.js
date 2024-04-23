//pedimos al usuario ingresar los 3 numeros.
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

//comprobamos si hay numeros que se repiten.
if (num1 === num2 && num2 === num3) {
    console.log("Los números ingresados son iguales.");
}
else if (num1 === num2 || num1 === num3)
{alert ("Almenos dos numeros son iguales.");
}

else if (num2 === num1 || num2 === num3)
{alert ("Almenos dos numeros son iguales.");
}
 // identificamos mayor, menor y el centro
else {
    
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let centro = num1 + num2 + num3 - mayor - menor;

    alert("Números de mayor a menor:", mayor, centro, menor);
    alert("Números de menor a mayor:", menor, centro, mayor);
}