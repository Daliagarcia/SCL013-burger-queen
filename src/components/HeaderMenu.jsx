import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = () => {

return(
    
        
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/home'>Inicio</Link>
                </li>
                <li>
                  <Link to='/menu'>Menu</Link>
                </li>           
                <li>
                    <Link to='/orderchef'>Pedidos Chef</Link>
                </li>
                <li>
                    <Link to='/orderwaiter'>Pedidos Mesero</Link>
                </li>                               
                <li>
                  <Link to='/login'>Cerrar sesion</Link>
                </li>
              </ul>
            </nav>
    
          </div>
      
      );

}

export default HeaderMenu;