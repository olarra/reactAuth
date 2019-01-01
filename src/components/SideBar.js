// src/components/SideBar.js

import React, { Component } from 'react';
import Contacts from './Contacts';

class SideBar extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the sidebar</h1>
        <Contacts/>
      </div>

    );
  }
}

export default SideBar;
