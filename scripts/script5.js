function sumarImpares() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }

    document.getElementById("sumaImpares").textContent = `La suma de los números impares entre 1 y 100 es: ${suma}`;
}

function mostrarAsteriscos() {
    let numAsteriscos = parseInt(prompt("¿Cuántos asteriscos deseas mostrar?"));
    let asteriscos = "";

    for (let i = 0; i < numAsteriscos; i++) {
        asteriscos += "*";
    }

    document.getElementById("asteriscos").textContent = asteriscos;
}

function mostrarTablas() {
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += "\n";
    }

    document.getElementById("tablas").textContent = resultado;
}