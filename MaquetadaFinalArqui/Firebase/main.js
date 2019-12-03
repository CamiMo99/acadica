var config = {
    apiKey: "AIzaSyApLTp5VLcUBzCz82I-SAE46MsO850Du4M",
    authDomain: "disweb-edbb3.firebaseapp.com",
    databaseURL: "https://disweb-edbb3.firebaseio.com",
};

firebase.initializeApp(config);
var db = firebase.database();

// CREAR ALERTA

var formularioAlerta = document.getElementById('formularioAlerta');
var nombreCompleto   = document.getElementById('nombreCompleto');
var mensaje    = document.getElementById('mensaje');
//var ciudad    = document.getElementById('ciudad');
//var hobbie    = document.getElementById('hobbie');
var idOculto   = document.getElementById('idOculto');

formularioAlerta.addEventListener('submit', (e) => {
    e.preventDefault();

if (!nombreCompleto.value || !mensaje.value) return null

var id = idOculto.value || Date.now()

db.ref('alertas/' + id).set({
    nombreCompleto: nombreCompleto.value,
    mensaje: mensaje.value,
  //  ciudad: ciudad.value,
  //  hobbie: hobbie.value
});

nombreCompleto.value = '';
mensaje.value = '';
//ciudad.value = '';
//hobbie.value = '';
idOculto.value = '';
});

// CONSULTAR ALERTA

var alertas = document.getElementById('alertas');
var alertasRef = db.ref('/alertas');

alertasRef.on('child_added', (data) => {
    var li = document.createElement('li')
    li.id = data.key;
li.innerHTML = alertaTemplate(data.val())
alertas.appendChild(li);
});

alertasRef.on('child_changed', (data) => {
    var nodoAlerta = document.getElementById(data.key);
nodoAlerta.innerHTML = alertaTemplate(data.val());
});

alertasRef.on('child_removed', (data) => {
    var nodoAlerta = document.getElementById(data.key);
nodoAlerta.parentNode.removeChild(nodoAlerta);
});

alertas.addEventListener('click', (e) => {
    var nodoAlerta = e.target.parentNode

    // ACTUALIZAR ALERTA
    if (e.target.classList.contains('edit')) {
    nombreCompleto.value = nodoAlerta.querySelector('.nombreCompleto').innerText;
    mensaje.value  = nodoAlerta.querySelector('.mensaje').innerText;
  //  ciudad.value  = nodoAlerta.querySelector('.ciudad').innerText;
    //hobbie.value  = nodoAlerta.querySelector('.hobbie').innerText;
    idOculto.value = nodoAlerta.id;
}

// ELIMINAR ALERTA
if (e.target.classList.contains('delete')) {
    var id = nodoAlerta.id;
    db.ref('alertas/' + id).remove();
}
});

function alertaTemplate({nombreCompleto, mensaje}) {
    return `
    <div class='nombreCompleto'>${nombreCompleto}</div>
    <div class='mensaje'>${mensaje}</div>
    
    
    
  `
};
