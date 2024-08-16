function crearCajas() {
    let numCajas = parseInt(prompt("¿Cuántas cajas deseas crear?"));
    let contenedor = document.getElementById("contenedor-cajas");
    contenedor.innerHTML = ""; 

    for (let i = 0; i < numCajas; i++) {
        let caja = document.createElement("div");
        caja.textContent = `Caja ${i + 1}`;
        if (numCajas < 8) {
            caja.style.color = "#f3c623";
            caja.style.backgroundColor = "#10375c";
            caja.style.display = "block";
        } else {
            caja.style.color = "#10375c";
            caja.style.backgroundColor = "#f3c623";
            caja.style.display = "inline-block";
            caja.style.marginRight = "10px";
        }
        contenedor.appendChild(caja);
    }
}