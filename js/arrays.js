// Ejercicio 1
var arr = [];

for (let i = 0; i < 7; i++) {
    arr.push(parseInt(Math.random() * 7 + 1));
}

function ordered() {
    orderedValues = arr.sort((a, b) => {
        return a - b;
    });
    document.getElementById("mayorMenor").innerHTML = orderedValues;
}

function reverse() {
    reverseValues = arr.reverse();
    document.getElementById("mayorMenor").innerHTML = reverseValues;
}

//Ejercicio 2
let users = [];

function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xmlValues(this);
        }
    };
    xhr.open("GET", "https://juanillodg.github.io/CMV-Publica/usuarios.xml", true);
    xhr.send();
}

function xmlValues(xml) {
    var i;
    var usrNom;
    var usrPsw;
    var usuario = [];
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("usuario");

    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
        usuario = [usrNom, usrPsw];
        users.push(usuario);
    }

    // muestro en consola el array de usuarios registrados
    console.log(users);
    users.forEach((usuario) => {
        usuario.forEach((datos) => {
            console.log(datos);
        });
    });
}

function xmlAscendenteNombre() {
    users.sort((a, b) =>
        a[0].localeCompare(b[0])
    );
    var tabla = "tabla usuarios nombre <br/>";
    tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
    for (i = 0; i < users.length; i++) {
        // leo las etiquetas que me interesan del objeto
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + users[i][0] + "</td><td>" + users[i][1] + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
    }
    tabla += "</table>"
    document.getElementById("contenidoXML").innerHTML = tabla;
}

function xmlAscendenteClave() {
    users.sort((a, b) =>
        a[1].localeCompare(b[1])
    );
    var tabla = "tabla usuarios clave <br/>";
    tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
    for (i = 0; i < users.length; i++) {
        // leo las etiquetas que me interesan del objeto
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + users[i][0] + "</td><td>" + users[i][1] + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
    }
    tabla += "</table>"
    document.getElementById("contenidoXML").innerHTML = tabla;
}

function showUser() {
    let usr = getuser().toUpperCase();
    users.forEach(u => {
        if (u[0] == usr) {
            let tabla = "tabla usuarios clave <br/>";
            tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
            tabla += "<tr><td>" + u[0] + "</td><td>" + u[1] + "</td></tr>";
            tabla += "</table>"
            document.getElementById("contenidoXML").innerHTML = tabla;
        }
    });
    
}

function getUser() {
    return document.getElementById("nom").value;
}