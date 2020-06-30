import React, { useState } from 'react';
import 'firebase/auth';
//import { app } from 'firebase';
//import firebase from '../firebaseConfig/firebase.js';
import firebase from '../firebaseConfig/firebase.js';
import Logo from './Logo.jsx';
import '../assets/css/Auth.css';


export default(props)=>{
    const [ email , setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    //const firebase = useFirebaseApp();
    const submit = async() => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)}
    

return(
<div className = "Container-login">
     <Logo/>
    <div className = "Container-form">
    <input type="email" id="email" placeholder = "Email" autoComplete= "off" onChange = { (ev) => setEmail(ev.target.value)} />
    <input type="password" id="password" placeholder = "Contraseña" autoComplete= "off" onChange = { (ev) => setPassword(ev.target.value)} />
    <button className = "Button-register" onClick = {submit} >Registrarse</button>
    </div>
  
</div>

)    
}