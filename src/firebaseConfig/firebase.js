import firebase from 'firebase/app'; 

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