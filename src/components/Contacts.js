// src/components/Contacts.js

import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router';
import ContactActions from '../flux/actions';
import ContactStore from '../flux/contacts.store';
import ContactListItem from './ContactListItem';

// Utilizaremos esta función para crear un elemento individual de la lista
// para cada contacto.
function getContactListItem(contact) {
  return (
    <ContactListItem
      key={contact.id}
      contact={contact}
    />
  );
}
class ContactsComponent extends Component {

  constructor() {
    super();
    // Para el estado inicial de la aplicación sólo queremos un array
    // de contactos vacío.
    this.state = {
      contacts: []
    }
    // Es necesario que utilicemos bind para tener la referencia this correcta
    // dentro de onChange.
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    console.log("ContactStore",ContactStore);
    ContactStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    ContactActions.recieveContacts();
  }

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      contacts: ContactStore.getContacts()
    });
  }

  render() {
    let contactListItems;
    if (this.state.contacts) {
      // Para cada contacto, crear un elemento correspondiente.
      contactListItems = this.state.contacts.map(contact => getContactListItem(contact));
    }
    return (
      <div>
        <ListGroup>
          {contactListItems}
        </ListGroup>
      </div>
    );
  }
}

export default ContactsComponent;
