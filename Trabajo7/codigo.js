getParameter = (key) => {
    address = window.location.search;
    parameterList = new URLSearchParams(address);
    return parameterList.get(key);
  }
  
  var nombre = getParameter("nombree");
  if (nombre != null) {
    document.getElementById("nom").innerHTML = nombre;
  }

  var apeP = getParameter("apellidoP");
  if (apeP != null) {
    document.getElementById("apeP").innerHTML = apeP;
  }

  var apeM = getParameter("apellidoM");
  if (apeM != null) {
    document.getElementById("apeM").innerHTML = apeM;
  }

  var email = getParameter("email");
  if (email != null) {
    document.getElementById("correo").innerHTML = email;
  }

  var telef = getParameter("tel");
  if (telef != null) {
    document.getElementById("telef").innerHTML = telef;
  }
  
  var usuario = getParameter("usuario");
  if (usuario != null) {
    document.getElementById("usuario").innerHTML = usuario;
  }
  
  var contra = getParameter("contra");
  if (contra != null) {
    document.getElementById("contra").innerHTML = contra;
  }

  function validarContraseña() {
    var contraseña = document.getElementById("contra").value;
    if (contraseña.length < 5) {
      alert("La contraseña es muy corta");
    }
  }

  function mismaContraseña(){
    var contra = document.getElementById("contra").value;
    var contra2 = document.getElementById("repetirContra").value;
    if(contra != contra2){
        alert("Las contraseñas no son iguales");
    }
  }

  function obtenerEdad() {
    var fechaInput = getParameter("fecha");
    var partes = fechaInput.split('-');
    var año = partes[0];
    var edad = 2023 - año;
    return edad;
  }
 
  var fecha = getParameter("fecha");
  if (fecha != null) {
    document.getElementById("edad").innerHTML = obtenerEdad();
  }
