const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector (".mensaje");
let longitud = textArea.value.length;
//console.log(`El mensaje es: ${textArea} y su longitud es: ${longitud}`);

function btnCopiar() {
    navigator.clipboard.writeText(mensaje.value).then(
      () => {
        // La copia al portapapeles fue exitosa
        console.log("Texto copiado al portapapeles");
      },
      () => {
        // La copia al portapapeles falló
        console.error("Error al copiar al portapapeles");
      }
    );
  }

let reemplazos = {
    'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'
}

const imagenMensaje = document.querySelector('.mensaje');
const botoncopiar = document.querySelector('.btn-copiar');

function btnEncriptar(){
    const textEncriptado = mensajeEncriptado(textArea.value.toLowerCase(), reemplazos);
    mensaje.value = textEncriptado;
    textArea.value = "";
    imagenMensaje.style.backgroundImage = 'none';
    botoncopiar.style.display = 'block';

}


// Crear una función para encriptar el mensaje
function mensajeEncriptado(textArea, reemplazos) {
    let mensajeModificado = ''; // Declarar la variable dentro de la función

    for (let i = 0; i < textArea.length; i++) {
        let caracter = textArea[i];
        if (reemplazos[caracter]) {
            mensajeModificado += reemplazos[caracter];
            console.log(`El carácter en la posición ${i} es igual a '${caracter}' y se ha reemplazado por '${reemplazos[caracter]}'`);
        } else {
            mensajeModificado += caracter;
        }
    }

    return mensajeModificado; // Devolver el mensaje encriptado
   
}

function btnDesencriptar(){
    const textDesencriptado = revertirMensaje(textArea.value.toLowerCase(), reemplazos1);
    mensaje.value = textDesencriptado;
    textArea.value = "";
    
}

//Encriptar el mensaje
let longitud1 = textArea.length;
let reemplazos1 = {
    'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'
}

// Crear una función para revertir el mensaje usando los reemplazos
function revertirMensaje(textArea, reemplazos1) {
    // Ordenar los reemplazos por la longitud del valor en orden descendente
    let patrones = Object.entries(reemplazos1).sort((a, b) => b[0].length > a[0].length);
    let mensajeRevertido = textArea;

    // Reemplazar cada patrón en el mensaje
    patrones.forEach(([nuevo, original]) => {
        // Crear una expresión regular para encontrar el patrón, escapar caracteres especiales
        let regex = new RegExp(escapeRegExp(nuevo), 'g');
        
        // Reemplazar el patrón en el mensaje
        mensajeRevertido = mensajeRevertido.replace(regex, original);
    });

    // Devolver el mensaje revertido
    return mensajeRevertido;
}

// Función para escapar caracteres especiales en la expresión regular
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// Revertir el mensaje
let mensajeRevertido = revertirMensaje(textArea.value, reemplazos1);
console.log(`Este es el mensaje revertido: ${mensajeRevertido}`);