// src/utils/ContactsAPI.js

import request from 'superagent/lib/client';
import AuthStore from '../flux/auth.store';

export default {

  // Queremos obtener una lista de todos los contactos a través de la API.
  // Esta lista contiene información reducida y será utilizada para la lista
  // de la izquierda en la pantalla.
  getContacts: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, response) => {
          if (err) reject(err);
          resolve(JSON.parse(response.text));
        })
    });
  },

  getContact: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('Authorization', 'Bearer ' + AuthStore.getJwt())
        .end((err, response) => {
          console.log('err, response =>', { err , response });
          if (err) reject(err);
          resolve(JSON.parse(response.text));
        })
    });
  }
}
