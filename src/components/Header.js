import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link }  from 'react-router-dom';
import AuthActions from '../flux/auth.actions';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    }
  }

  login = () => {
    // Podemos llamar al método show de Auth0Lock, que es pasado como una
    // propiedad, para permitir que el usuario se autentique
    console.log("loging");
    this.props.lock.show();
  }

  logout = () => {
   // AuthActions.logUserOut();
   console.log("logout");
   AuthActions.logUserOut();
   this.setState({authenticated: false});
 }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <span>React-Bootstrap</span>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
        <NavItem componentClass='span'>
          <Link to="/home">Home</Link>
        </NavItem>
        <NavItem componentClass='span'>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem onClick={() => this.login()}>
          Login
        </NavItem>
        <NavItem onClick={() => this.logout()}>
          Logout
        </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
