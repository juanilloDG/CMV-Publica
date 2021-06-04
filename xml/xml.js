window.onload = leerXML();

var datos = [];
var myModal = new bootstrap.Modal(document.getElementById('modal'), {
    keyboard: true,
  })

function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xmlValues(this);
        }
    };
    xhr.open("GET", "https://juanillodg.github.io/CMV-Publica/xml/datos.xml", true);
    xhr.send();
}

function xmlValues(xml) {
    var i;
    var name;
    var photo;
    var foot;
    var details;
    var card = [];
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("card");

    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        name = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        photo = x[i].getElementsByTagName("photo")[0].childNodes[0].nodeValue;
        foot = x[i].getElementsByTagName("foot")[0].childNodes[0].nodeValue;
        details = x[i].getElementsByTagName("details")[0].childNodes[0].nodeValue;
        card = [name, photo, foot, details];
        datos.push(card);
    }

    cardList();

    // muestro en consola el array de usuarios registrados
    console.log(datos);
}

function cardList() {
    datos.forEach(d => {
        $(".list").append(`
        <div class="card" onclick="modal(this)">
            <img class="img-fluid" src="${d[1]}" alt="">
            <div class="landScape-name">    
                <span class="name">${d[0]}</span>
            </div>
        </div>
        `)
    })
}

function getCard(card) {
    let name = $(card).find("span.name").text();
    let photo = $(card).find("img").attr("src");
    let foot;
    let details
    let array = []
    datos.forEach(d => {
        if (d[0] == name) {
            foot = d[2];
            details = d[3]
        }
    })

    return array = [name, photo, foot, details]
}

function modal(div) {
    let card = getCard(div);

    myModal.show();

    $(".modal-body").html(`
        <div class="modal-information">
            <div class="modal-image-container">
                <img class="img-fluid modal-image" src="${card[1]}" alt="">
            </div>
            <div class="modal-information-container">
                <p class="modal-name">Nombre: ${card[0]}</p>
                <p class="modal-foot">Alineación: ${card[2]}</p>
            </div>
        </div>
        <div class="modal-details-container">
            <p class="modal-details">Descripción</p>
            <p class="modal-details">${card[3]}</p>
        </div>
    `);
}

function closeModal() {
    myModal.hide( );
}