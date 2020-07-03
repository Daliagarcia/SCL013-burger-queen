import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
/* import LoginUser from './AuthLogin.jsx';
import Menu from './Menu.jsx';
import ViewHome from './Home.jsx';
import OrderChef from './OrderChef.jsx';
import OrderWaiter from './OrderWaiter.jsx'; */

const HeaderMenu = () => {

return(
    
        <Router>
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
        </Router>
      );

}

export default HeaderMenu;