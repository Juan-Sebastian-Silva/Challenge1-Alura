// Función para encriptar texto según las reglas dadas
function encriptarTexto(texto) {
    let textoEncriptado = texto.toLowerCase(); // Convertir a minúsculas

    // Reemplazar las letras según las reglas
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    return textoEncriptado;
}

// Función para desencriptar texto según las reglas dadas
function desencriptarTexto(textoEncriptado) {
    let textoOriginal = textoEncriptado.toLowerCase(); // Convertir a minúsculas

    // Revertir el proceso de encriptación
    textoOriginal = textoOriginal.replace(/enter/g, "e");
    textoOriginal = textoOriginal.replace(/imes/g, "i");
    textoOriginal = textoOriginal.replace(/ai/g, "a");
    textoOriginal = textoOriginal.replace(/ober/g, "o");
    textoOriginal = textoOriginal.replace(/ufat/g, "u");

    return textoOriginal;
}

// Función para manejar el evento de clic en el botón de encriptar
function handleEncriptar() {
    let texto = document.getElementById("texto__encriptar").value;
    let resultado = encriptarTexto(texto);
    mostrarResultado(resultado);
}

// Función para manejar el evento de clic en el botón de desencriptar
function handleDesencriptar() {
    let textoEncriptado = document.getElementById("texto__encriptar").value;
    let resultado = desencriptarTexto(textoEncriptado);
    mostrarResultado(resultado);
}

// Función para mostrar el resultado en la pantalla
function mostrarResultado(resultado) {
    let resultadoContainer = document.getElementById("texto__resultado");

    // Limpiar el contenido anterior
    resultadoContainer.innerHTML = '';

    // Crear y agregar el texto resultado
    let textoResultado = document.createElement("p");
    textoResultado.id = "texto__resultado";
    textoResultado.textContent = resultado;

    resultadoContainer.appendChild(textoResultado);
}

// Asignar funciones a los botones
document.getElementById("btn-encriptar").addEventListener("click", handleEncriptar);
document.getElementById("btn-desencriptar").addEventListener("click", handleDesencriptar);
