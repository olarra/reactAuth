import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link }  from 'react-router-dom';

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
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      this.setState({authenticated: true});
    });
  }

  logout = () => {
   // AuthActions.logUserOut();
   console.log("loging");
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
