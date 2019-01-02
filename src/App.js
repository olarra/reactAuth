import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Auth0Lock } from 'auth0-lock';

class App extends Component {

  /* Class Properties */
  lock = null;

  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount() {
    this.lock = new Auth0Lock('rmbtYmfjYxMuXlzyWr-RGGETvczYadkw', 'olarra.eu.auth0.com');

    // Listening for the authenticated event
    this.lock.on("authenticated", authResult => {
      console.log("authenticated =>", authResult);

      console.log("authenticated =>", authResult.accessToken);
      this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
                if (error) {
                    // Handle error
                    console.log(error);
                    return;
                }

                localStorage.setItem('accessToken', authResult.accessToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('isAuthenticated', true);
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Header lock={this.lock}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
