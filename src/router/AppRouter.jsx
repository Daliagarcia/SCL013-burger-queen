import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RegisterUser from '../components/AuthRegister';
import LoginUser from '../components/AuthLogin';
import '../components/fontAwesoneIcons/FontAwesone.jsx';
import ViewMenu from '../components/Menu.jsx';
import ViewHome from '../components/Home.jsx';
import ViewOrderChef from '../components/OrderChef.jsx';
import ViewOrderWaiter from '../components/OrderWaiter.jsx';
import {withRouter}  from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu.jsx';

class AppRouter extends Component {


  render(){

    return (
   
      <Router>
        <HeaderMenu/>
         
          <Switch>        
            <Route path = '/home' component = {withRouter(ViewHome)} />
            <Route path = '/menu' component = {withRouter(ViewMenu)} />
            <Route path = '/orderwaiter' component = {withRouter(ViewOrderWaiter)} />
            <Route path = '/orderchef' component = {withRouter(ViewOrderChef)} />
            <Route path = '/login' component = {withRouter(LoginUser)} />
            <Route path = '/' component = {withRouter(RegisterUser)} />
          </Switch>
        
   
      </Router>

      
    );
  
  }
} 

export default AppRouter;
 
    
  