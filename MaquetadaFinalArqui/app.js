function registrar(){
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(registrar){
      window.location.href = "cuenta.html"
     // verificar()
    })
    //.then(function(verificar){
    //  window.location.href = "perfil.html"
   // })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function ingreso(){

  var email2 = document.getElementById('email2').value;
  var contrasena2 = document.getElementById('contrasena2').value;

  firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
  .then(function(ingreso){
    window.location.href = "cuenta.html";
})
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      aparece(user);
      
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      //console.log(email)

      console.log('**************');
      console.log(user.email)
      console.log('**************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo')
      // ...
    }
  });
}
observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById('contenido');
  if(user.email){

     contenido.innerHTML =  ` 
     <header>
        <nav class="navegador">
            <img src="Imagenes/Group72.png" width="180" height="1000">
            <img class="icon" src="Imagenes/Rectangle 171.png" alt="">
            <div class="texto">

                <a class="area" href="#inicio">Area personal </a>
                <a class="nave" href="#navegacion">Navegación</a>
                <a class="perfil" href="#perfil">Información personal</a>
            </div>
        </nav>
    </header>
    <div class="barraV">
        <h4>Hola, ${user.email}</h4>
        <img id="bell" src="Imagenes/bell 1.png">
        <img id="line" src="Imagenes/Line 1.png">
        <a href="cerrar.html" class="button3" role="button">
        <img id="circulo" src="Imagenes/Group 60.png"></a>
        <img id="triangle" src="Imagenes/Polygon 1.png">
    </div>
    <div class="tuscursos">
        <h2>Tus cursos</h2>
    </div>
    <div>
        <button type="tareas">
            <a href="frames.html" class="button2" role="button"><img type="cuadro" src="Imagenes/Group 114.png"></a> 
        </button>
        
        <div class="materias">
            <img id="mate2" src="Imagenes/Group 107.png">
            <img id="mate3" src="Imagenes/Group 108.png">
            <img id="barra1" src="Imagenes/Group 109.png">
        </div>
        <div>
            <img id="calendario" src="Imagenes/Group 110.png">
            <img id="tSemana" src="Imagenes/Group 112.png">
            <img id="impresion" src="Imagenes/Group 115.png">
        </div>

    </div>
    `;
  }
}

function observador2(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      //aparece(user);
      aparece2(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      //console.log(email)

      console.log('**************');
      console.log(user.email)
      console.log('**************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo')
      // ...
    }
  });
}
observador2();


function aparece2(user){
  var user = user;
  var contenido2 = document.getElementById('contenido2');
  if(user.email){

     contenido2.innerHTML =  ` 
     
     <div class="contenedor">
        <div class="fondito"><img src="frames/header.png" alt="fondo"></div>
        <div class="barraV">
            <h4>Hola, ${user.email}</h4>
            <img id="triangle" src="frames/Polygon 1.png">
            <img id="bell" src="frames/bell 1.png">
            <img id="line" src="frames/Line 1.png">
            <a href="cerrar.html" class="button3" role="button">
                <img id="circulo" src="Imagenes/Group 60.png"></a>
        </div>
        <div class="titulo">Arquitectura de la Información </div>
        <div class="ubicacion"><strong>Cursos/ Arquitectura de la información</strong></div>

        <br>
        <div class="unidad">
            <div class="fondo-unidad"> <img src="frames/unidad.png" alt="titulo de la unidad"></div>
            <div class="titulo-unidad">Unidad 3</div>
        </div>

        <div class="tareas">

            <div class="tarea1">
                <div class="fondo1"><img src="frames/fondo1.png" alt="fondo tarea"></div>
                <div class="titulo1-1">Atomic design</div>
                <div class="texto1-1">
                    <p>Átomos: Los átomos son el nivel más básico en Atomic Design.<br>
                        Cualquier etiqueta HTML es un átomo: img, input, button, h2,<br>
                        table, etc...</p>
                    <a href="tarea.html" class="button1" role="button">Ver más</a>
                </div>
            </div>
            <div class="fondo2"><img src="frames/fondo2.png" alt="tarea 2"></div>
            <div class="fondo3"><img src="frames/fondo3.png" alt="tarea 2"></div>
            <div class="fondo4"><img src="frames/fondo4.png" alt="tarea 2"></div>

            <div class="tarea5">
                <div class="fondo5"><img src="frames/fondo5.png" alt="fondo tarea"></div>
                <div class="titulo5-1">Recursos de la unidad</div>
                <div class="titulo5-2">Periodo 2019 - 2</div>

                <div class="texto5-1">
                    <p>Aprende a realizar encuestas en línea</p>
                    <div class="link1"><a href="https://www.lucidchart.com/" target="_blank">Lucidchart.com</a></div>
                </div>

                <div class="texto5-2">
                    <p>Realiza cursos para mejorar tu codificación</p>

                    <div class="link2"><a href="https://www.codecademy.com/" target="_blank">CodeAcademy.com</a></div>
                </div>

                <div class="texto5-3">
                    <p>Resumen de los 10 principios de usabilidad</p>

                    <div class="link3">
                        <p>Nielsenprincipios.pdf</p>
                    </div>
                </div>

                <div class="texto5-4">
                    <p>Tarea final</p>

                    <div class="link4">
                        <p>encuestaestudiantes.pdf</p>
                    </div>
                </div>
            </div>

        </div>

</div>
`;
  }
}

function observador3(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      //aparece(user);
      aparece3(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      //console.log(email)

      console.log('**************');
      console.log(user.email)
      console.log('**************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo')
      // ...
    }
  });
}
observador3();

function aparece3(user){
  var user = user;
  var contenido3 = document.getElementById('contenido3');
  if(user.email){

     contenido3.innerHTML =  ` 

     <!--Rectangle Barra Verde-->
    <form class="example" action="action_page.php">
            <button type="submit">
                <h3>Hola, ${user.email}</h3>
            </button>
    </form>
    
    <!--Iconitos-->
    <div id="iconitos">
        <a href="cerrar.html" class="button3" role="button">
            <img src="img/iconitos.png" width ="173" height="45"> </a>
    </div>

    <!--fondo-->
    <div id="fondis">
        <img src="img/fondo.png" width="1516" height="615">
    </div>

    <!--Arqui-->
    <div>
        <h1>Arquitectura de la Información</h1>
        <h2>Tus cursos / Arquitectura de la información</h2>
    </div>

    <!--Titulos y subtitulos-->
    <div class="Titulos">
        <section>
            <article>
                    <h1 type="D">Descripción de la tarea</h1>
                    <p type="1">Revisa la rubrica</p>
                    <p type="V">Ver ejemplos(5)</p>
                    <h1 type="C">Comentarios</h1>
                    <h3 type="2">Escribe tus dudas sobre la tarea</h3>
                    <h2 type="E">Estado de la entrega</h2>
                    <p type="3">Número de intentos</p>
                    <p type="4">Estado de calificación</p>
                    <h2 type="F">Fecha y tiempo restante de la entrega</h2>
                    <p type="5">Se entrego la tarea</p>
                    <p type="6">18 de noviembre del 2019 a las 23:59</p>
            </article>
        </section>
        
    </div>

    <!--Comentario-->
    <form class="Rectangle1" action="action_page.php">
        <input type="Comentario" placeholder="Haz un comentario" name="keyword">
       <!--<a href="Frame20.html"></a>-->
    </form>

    <div class='container'>
  
                          <object
                          type="text/html"
                          data="Firebase/index.html"
                          >
                          ERROR (no puede mostrarse el objeto)
                        </object>
  
</div>

    <div class="image">
        <img src="img/rubrica.png" type="rubrica" width="708" height="201">
        <img src="img/barra.png" type="barra" width="533" height="7">
        <img src="img/1.png" type="nn" width="64" height="35">
        <img src="img/43.png" type="nnn" width="64" height="35">
        <img src="img/circulitos.png" type="cir" width="59" height="14">
    </div>
      `;
  }
}

function observador4(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      //aparece(user);
      aparece4(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      //console.log(email)

      console.log('**************');
      console.log(user.email)
      console.log('**************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo')
      // ...
    }
  });
}
observador4();

function aparece4(user){
  var user = user;
  var contenido4 = document.getElementById('contenido4');
  if(user.email){

     contenido4.innerHTML =  ` 

<div class="viejo"></div>

<div class="contenedorCerrar">
<h1>¡Hola! ${user.email}</h1>
<h2>Finaliza sesion</h2> 
</div>              
    
 <!--Cerrar-->
   
        <button onclick="cerrar()">
            <h3>Finalizar</h3>
        </button>
      `;
  }
}

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log('Saliendo...')
    window.location.href = "index.html"
  })
  .catch(function(error){
    console.log(error)
  })
}

//function verificar(){
  //var user = firebase.auth().currentUser;
 // user.sendEmailVerification().then(function(){
//console.log('enviando correo...');
 //}).catch(function(error){
//console.log(error);
 // });
//}

