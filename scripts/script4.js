function ordenarNumeros() {
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));

    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);

    document.getElementById("numerosOrdenados").textContent = `Números ordenados: ${numeros.join(", ")}`;
}

function calcularImporte() {
    let cantidad = parseInt(prompt("Ingresa la cantidad comprada:"));
    let precio = parseFloat(prompt("Ingresa el precio por unidad:"));
    let importeNeto = cantidad * precio;

    if (cantidad > 1000) {
        importeNeto *= 0.9; 
    }

    document.getElementById("importeNeto").textContent = `Importe neto: $${importeNeto.toFixed(2)}`;
}

function calcularSueldo() {
    let sueldoBase = parseFloat(prompt("Ingresa el sueldo base:"));
    let nivel = parseInt(prompt("Ingresa el nivel (1-4):"));
    let sueldoFinal;

    switch (nivel) {
        case 1:
            sueldoFinal = sueldoBase * 1.1; 
            break;
        case 2:
            sueldoFinal = sueldoBase * 1.2; 
            break;
        case 3:
            sueldoFinal = sueldoBase * 1.3; 
            break;
        case 4:
            sueldoFinal = sueldoBase * 1.4; 
            break;
        default:
            sueldoFinal = sueldoBase;
    }

    document.getElementById("sueldoFinal").textContent = `Sueldo final: $${sueldoFinal.toFixed(2)}`;
}