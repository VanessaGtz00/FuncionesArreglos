function emitirVoto(event) {
    event.preventDefault();
    let seccion = document.getElementById("seccion").value;
    let mensaje = document.getElementById("mensaje");

    switch (seccion) {
        case "norte":
            mensaje.textContent = "Gracias por votar por la sección Norte.";
            break;
        case "sur":
            mensaje.textContent = "Gracias por votar por la sección Sur.";
            break;
        case "centro":
            mensaje.textContent = "Gracias por votar por la sección Centro.";
            break;
        default:
            mensaje.textContent = "Por favor selecciona una sección.";
    }
}