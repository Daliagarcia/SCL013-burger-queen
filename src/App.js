import React from 'react';
//import firebase from './firebaseConfig/firebase.js';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//import 'firebase/auth';
//import logo from './logo.svg';
//import './App.css';

//importando los componentes
import RegisterUser from './components/Auth.jsx';
import LoginUser from './components/AuthLogin.jsx';


function App() {
 /* firebase.auth().onAuthStateChanged(user=>{
   console.log(user);
   if(user){
    console.log('usuario logueado');
   }
    else{
      console.log('usuario no logueado')
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return(
    <div className="app">
     <RegisterUser />
     <LoginUser />
    </div>

   );
}

export default App;
