// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnQrtddub3m-Iogt1gI9aXUOImIBfZPEI",
    authDomain: "uyaproyecto-2dbe9.firebaseapp.com",
    databaseURL: "https://uyaproyecto-2dbe9.firebaseio.com",
    projectId: "uyaproyecto-2dbe9",
    storageBucket: "uyaproyecto-2dbe9.appspot.com",
    messagingSenderId: "754046813172"
  };
  firebase.initializeApp(config);
 //Referencia a la base de datos
  var messageRef = firebase.database().ref('messages');

  //Listen for form submit
  document.getElementById('dejarcomentario').addEventListener('submit', submitForm);

  //SubmitForm
  function submitForm(e) {
      e.preventDefault();

      //Coger valores
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('comentario').value;
      var todoCorrecto = true;


    if(todoCorrecto == true){
        //Guardamos el mensaje
        guardarMensaje(nombre, email, mensaje);
        alert("Enviado correctamente");
        //clear form
        document.getElementById('dejarcomentario').reset();
  
    }
     
      //clear form
      document.getElementById('dejarcomentario').reset();

      
    }

  function guardarMensaje(nombre, email, mensaje){
      var nuevoComentarioREF = messageRef.push();
      nuevoComentarioREF.set({
          nombre: nombre,
          email: email,
          mensaje: mensaje
          
        });

        
  }
