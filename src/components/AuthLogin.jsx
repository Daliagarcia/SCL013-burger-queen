import React, { useState } from 'react';
import 'firebase/auth';
import firebase, {errorFirebase} from '../firebaseConfig/firebase.js';
import Logo from './Logo.jsx';
import '../assets/css/Auth.css';
import { Link } from 'react-router-dom';



const LoginUser = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = () => {
        if( email === '' || password === '') {
            alert("Hay campos vacíos, favor llenarlos")
    
        } else {
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(() => {
                props.history.push('/home');
                //console.log(res);
            })
            .catch((error) => {
                errorFirebase(error);
            })

        }
        
    }


    return( 
        <div className="Container-login"> 
            <Logo/>
            <div className = "Container-form">
            <input type="email" id="email" placeholder="E-mail" autoComplete= "off" onChange = { (ev) => setEmail(ev.target.value)} />
            <input type="password" id="password" placeholder="Contraseña" autoComplete= "off" onChange = { (ev) => setPassword(ev.target.value)} />
            <button className = "Button-register" onClick = {loginUser}>Iniciar sesión</button>  
            <hr/>       
            <p>¿No tienes una cuenta? <Link className = 'link-Redirect' to='/register'>Regístrate</Link></p>
            </div>
        
                     
        </div>
        
        ) 
}

export default LoginUser;