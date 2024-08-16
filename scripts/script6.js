
document.getElementById("toggleFormulario").addEventListener("click", function() {
    let formulario = document.getElementById("formularioIngreso");
    if (formulario.style.display === "none" || formulario.style.display === "") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
});

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensajeGracias").style.display = "block"; 
    document.getElementById("formulario").reset(); 
    document.getElementById("formularioIngreso").style.display = "none"; 
});