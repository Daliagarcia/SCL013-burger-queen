import React from 'react';
import 'firebase/auth';
/*import {userfirebaseApp} from 'reactfire';*/
import { app } from 'firebase';

export default(props)=>{


return(
<div>
    <div>
    <label htmlFor="email">Correo electronico</label>
    <input type="email" id="email"/>
    <label htmlFor="password">Contrasena</label>
    <input type="password" id="password"/>
    <button>Iniciar sesion</button>
    </div>
  
</div>

)    
}