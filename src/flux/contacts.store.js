// src/stores/ContactStore.js

import AppDispatcher from './dispatcher';
import ContactConstants from './contacts.constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _contacts = [];
let _contact = {};

function setContacts(contacts) {
  _contacts = contacts;
}

function setContact(contact) {
  _contact = contact;
}

class ContactStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getContacts() {
    return _contacts;
  }

  getContact() {
    return _contact;
  }

}

const ContactStore = new ContactStoreClass();

// Aquí registramos un callback para el despachante. Cada tipo de acción
// es manejado por separado.
ContactStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case ContactConstants.RECIEVE_CONTACTS:
      setContacts(action.contacts);
      // Es necesario llamar a emitChange para que el listener de eventos
      // registre que un cambio ha sido realizado
      ContactStore.emitChange();
      break

    case ContactConstants.RECIEVE_CONTACT:
      setContact(action.contact);
      ContactStore.emitChange();
      break

    case ContactConstants.RECIEVE_CONTACT_ERROR:
      alert(action.message);
      ContactStore.emitChange();
      break

    case ContactConstants.RECIEVE_CONTACTS_ERROR:
      alert(action.message);
      ContactStore.emitChange();
      break

    default:
  }

});

export default ContactStore;