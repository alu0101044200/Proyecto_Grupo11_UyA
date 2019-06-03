   (function(){
   //Inicializar Firebase
    const config = {
        apiKey: "AIzaSyAnQrtddub3m-Iogt1gI9aXUOImIBfZPEI",
        authDomain: "uyaproyecto-2dbe9.firebaseapp.com",
        databaseURL: "https://uyaproyecto-2dbe9.firebaseio.com",
        storageBucket: "uyaproyecto-2dbe9.appspot.com",
      };
      firebase.initializeApp(config);

      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const btnLogOut = document.getElementById('btnLogOut');

       // Añadir Evento login
       btnLogin.addEventListener('click', e => {
      
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
      
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));  
      });
    
      // Añadir evento signup
      btnSignUp.addEventListener('click', e => {
        // Obtener email y pass
        // TODO: comprobar que el email sea real
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Register
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
      });

      btnLogOut.addEventListener('click', e => {
          firebase.auth().signOut();
      });

       // Añadir un listener en tiempo real
       firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser);
          btnLogOut.classList.remove('hide');
          inicio.classList.add('hide');    
        } else {
          console.log('no logueado');
          btnLogOut.classList.add('hide');
          inicio.classList.remove('hide');
        }    
      });

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
          div = document.getElementById('flotante');
          div.style.display = '';

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
    }());