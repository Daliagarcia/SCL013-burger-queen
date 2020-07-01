import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAX9Sb5Bozie4s6asaG7FLYuGfwGRcr948",
    authDomain: "burger-queen-b6dc0.firebaseapp.com",
    databaseURL: "https://burger-queen-b6dc0.firebaseio.com",
    projectId: "burger-queen-b6dc0",
    storageBucket: "burger-queen-b6dc0.appspot.com",
    messagingSenderId: "510609317456",
    appId: "1:510609317456:web:25b88954c0f6f1d375fb55"
  };

  export default firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();

  export const errorFirebase = (error) => {
      const errorCode = error.code;

      if (errorCode === 'auth/weak-password'){
        alert("Contraseña débil, debe tener mínimo 6 caracteres");

      }else if(errorCode === 'auth/email-already-in-use'){
        alert("Este correo ya está registrado con otra cuenta");

      }else if(errorCode === 'auth/invalid-email'){
        alert("Este email es inválido");
      }
        
  }

