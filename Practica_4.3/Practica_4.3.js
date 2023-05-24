function aplicarEstilos() {
    var textArea = document.getElementById("textArea");
    var colorLetra = document.getElementById("colorLetra").value;
    var colorFondo = document.getElementById("colorFondo").value;
    var tamanoFuente = document.getElementById("tamanoFuente").value;
    var negrita = document.getElementById("negrita").checked;
    var italica = document.getElementById("italica").checked;
    var subrayado = document.getElementById("subrayado").checked;

    textArea.style.color = colorLetra;
    textArea.style.backgroundColor = colorFondo;
    textArea.style.fontSize = tamanoFuente + "px";

    textArea.style.fontWeight = negrita ? "bold" : "normal";
    textArea.style.fontStyle = italica ? "italic" : "normal";
    textArea.style.textDecoration = subrayado ? "underline" : "none";

}

//Cambiar el borde de las secciones "Color de letra" y "Color de fondo" al cambiar el color
document.getElementById("colorLetra").addEventListener("input", function() {
    var colorLetra = document.getElementById("colorLetra").value;
    document.getElementById("colorLetra").style.borderColor = colorLetra;
});

document.getElementById("colorFondo").addEventListener("input", function() {
    var colorLetra = document.getElementById("colorFondo").value;
    document.getElementById("colorFondo").style.borderColor = colorLetra;
});