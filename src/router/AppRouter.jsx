import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RegisterUser from '../components/Auth';
import LoginUser from '../components/AuthLogin';

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/register'>Registro</Link>
              </li>
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            </ul>
          </nav>
  
          
          <Switch>
            <Route path = '/register' component = {RegisterUser} />
            <Route path = '/login' component = {LoginUser} />
          </Switch>
        </div>
      </Router>
    );
  }
  