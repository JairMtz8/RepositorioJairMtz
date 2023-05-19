var imagenes = ["Imagenes/integrantes1.jpg", "Imagenes/integrantes2.jpg", "Imagenes/integrantes3.jpg",
 "Imagenes/integrantes4.jpg", "Imagenes/integrantes5.jpg"]; 
var indiceImagenActual = 0;

function imagen() {
  var imagen = document.getElementById("imagen");
  imagen.src = imagenes[indiceImagenActual];
  imagen.alt = "Imagen " + (indiceImagenActual + 1);
}

function retroceder() {
  if (indiceImagenActual === 0) {
    indiceImagenActual = imagenes.length - 1;
  } else {
    indiceImagenActual--;
  }
  imagen();
}

function avanzar() {
  if (indiceImagenActual === imagenes.length - 1) {
    indiceImagenActual = 0;
  } else {
    indiceImagenActual++;
  }
  imagen();
}
imagen();

window.onload = imagen; 