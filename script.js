// Función para encriptar el texto
function encriptar() {
  // Obtener el valor del área de texto
  let texto = document.getElementById("texto").value;
  // Obtener los elementos para mostrar mensajes y la imagen
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Encriptar el texto reemplazando letras específicas con sus equivalentes
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Verificar si el área de texto no está vacía
  if (texto.length != 0) {
    // Mostrar el texto encriptado en el área de texto
    document.getElementById("texto").value = textoCifrado;
    // Mostrar mensaje de éxito
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    // Cambiar la imagen a la correspondiente al éxito
    muñeco.src = "imagenes/Muñeco.png";
  } else {
    // Llamar a la función para mostrar un mensaje de error
    mostrarMensajeError();
  }
}

// Función para desencriptar el texto
function desencriptar() {
  // Obtener el valor del área de texto
  let texto = document.getElementById("texto").value;
  // Obtener los elementos para mostrar mensajes y la imagen
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Desencriptar el texto reemplazando los códigos de encriptación con letras originales
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Verificar si el área de texto no está vacía
  if (texto.length != 0) {
    // Mostrar el texto desencriptado en el área de texto
    document.getElementById("texto").value = textoCifrado;
    // Mostrar mensaje de éxito
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    // Cambiar la imagen a la correspondiente al éxito
    muñeco.src = "imagenes/Muñeco.png";
  } else {
    // Llamar a la función para mostrar un mensaje de error
    mostrarMensajeError();
  }
}

// Función para mostrar un mensaje de error si no se ha ingresado texto
function mostrarMensajeError() {
  // Obtener los elementos para mostrar mensajes y la imagen
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Cambiar la imagen a la correspondiente al error
  muñeco.src = "imagenes/Muñeco.png";
  // Mostrar mensaje de error
  tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  // Mostrar alerta con mensaje de advertencia
  swal("Ooops!", "Debes ingresar un texto", "warning");
}
