
let ejemploArreglo = [1, 2, 3, 4, 5];


function usarPop() {
    let elementoEliminado = ejemploArreglo.pop();
    document.getElementById("resultado").textContent = `Elemento eliminado: ${elementoEliminado}. Nuevo arreglo: [${ejemploArreglo.join(", ")}]`;
}


function usarShift() {
    let elementoEliminado = ejemploArreglo.shift();
    document.getElementById("resultado").textContent = `Elemento eliminado: ${elementoEliminado}. Nuevo arreglo: [${ejemploArreglo.join(", ")}]`;
}


function usarPush() {
    let nuevoElemento = prompt("Ingresa el nuevo elemento a añadir:");
    ejemploArreglo.push(nuevoElemento);
    document.getElementById("resultado").textContent = `Nuevo arreglo: [${ejemploArreglo.join(", ")}]`;
}


function usarUnshift() {
    let nuevoElemento = prompt("Ingresa el nuevo elemento a añadir al principio:");
    ejemploArreglo.unshift(nuevoElemento);
    document.getElementById("resultado").textContent = `Nuevo arreglo: [${ejemploArreglo.join(", ")}]`;
}


    let indice = parseInt(prompt("Ingresa el índice para iniciar el cambio:"));
    let cantidad = parseInt(prompt("Ingresa la cantidad de elementos a eliminar:"));
    let nuevoElemento = prompt("Ingresa el nuevo elemento (opcional):");
    if (nuevoElemento) {
        ejemploArreglo.splice(indice, cantidad, nuevoElemento);
    } else {
        ejemploArreglo.splice(indice, cantidad);
    }
    document.getElementById("resultado").textContent = `Nuevo arreglo: [${ejemploArreglo.join(", ")}]`;



function usarDelete() {
    let indice = parseInt(prompt("Ingresa el índice del elemento a eliminar:"));
    delete ejemploArreglo[indice];
    document.getElementById("resultado").textContent = `Nuevo arreglo: [${ejemploArreglo.join(", ")}]`;
}


function usarReverse() {
    ejemploArreglo.reverse();
    document.getElementById("resultado").textContent = `Arreglo invertido: [${ejemploArreglo.join(", ")}]`;
}


function usarSort() {
    ejemploArreglo.sort();
    document.getElementById("resultado").textContent = `Arreglo ordenado: [${ejemploArreglo.join(", ")}]`;
}


function usarConcat() {
    let nuevoArreglo = [6, 7, 8];
    let arregloConcatenado = ejemploArreglo.concat(nuevoArreglo);
    document.getElementById("resultado").textContent = `Arreglo concatenado: [${arregloConcatenado.join(", ")}]`;
}


function usarJoin() {
    let cadena = ejemploArreglo.join(" - ");
    document.getElementById("resultado").textContent = `Cadena unida: ${cadena}`;
}


function mostrarLength() {
    let longitud = ejemploArreglo.length;
    document.getElementById("resultado").textContent = `Longitud del arreglo: ${longitud}`;
}