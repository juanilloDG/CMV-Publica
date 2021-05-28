/* 
JavaScript / XML
web o pagina: ejercicios de XML y JavaScript
autor: Prof. Carlos Boni
fecha: 27 abril 2021
resumen: lectura y carga en array bidimensional de un XML
*/

// variable global de la pagina
let registrados = [];

function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde GitHub");
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
  xhr.send();
}

function leerXML0() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde GitHub con atributos");
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
  xhr.send();
}

function leerXML1() {
  // lee desde Axartec.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde Axartec");
    }
  };
  xhr.open("GET", "https://appslab.axartec.com/pruebas/registrados.xml", true);
  xhr.send();
}

function leerXML2() {
  // lee desde aquí.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde aquí");
    }
  };
  xhr.open("GET", "registrados.xml", true);
  xhr.send();
}

function miFuncion(xml,fuente) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var tabla=fuente + "<br/>";
  var x = xmlDoc.getElementsByTagName("usuario");
  
  tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i <x.length; i++) { 
	// leo las etiquetas que me interesan del objeto
	usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
	usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
	tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
	// actualizo el array bidimensional con los usuarios registrados
	usuario = [usrNom,usrPsw];
	registrados.push(usuario);
  }
  tabla += "</table>"
  document.getElementById("contenidoXML").innerHTML = tabla;
  
  // muestro en consola el array de usuarios registrados
	registrados.forEach((usuario) => {
		usuario.forEach((datos) => {
			console.log(datos);
		});
	});
}