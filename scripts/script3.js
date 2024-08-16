function sumarNumeros() {
    let suma = 0;
    let num;

    do {
        num = parseInt(prompt("Ingresa un número positivo (o un número negativo para terminar):"));
        if (num > 0) {
            suma += num;
        }
    } while (num >= 0);

    document.getElementById("resultado").textContent = `La suma de los números positivos es: ${suma}`;
}