// server.js

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken'); //install this, move to declarations
const cors = require('cors');

app.use(cors());

const validateToken = (req, res, next) => {
  console.log('validateToken')
  const loginToken = req.headers.authorization;
  console.log("loginToken",loginToken);
  jsonwebtoken.verify(loginToken, new Buffer('kbs4bEt4wX9mBQOTc9lKJ17-350xwP1blEU1-Py-RylYUgCsI7bjXdPpUaQBc5M2', 'base64'), function(err, decoded) {
      if(err) {
          return res.status(401).send({message: 'invalid_token'});
      }
      //be aware of encoded data structure, simply console.log(decoded); to see what it contains
      console.log("decoded", decoded);
      next(); //`decoded.foo` has your value
  });
}


// Este es el middleware de express-jwt configurado utilizando los parámetros
// de su cuenta de Auth0
const authCheck = jwt({
  secret: new Buffer('kbs4bEt4wX9mBQOTc9lKJ17-350xwP1blEU1-Py-RylYUgCsI7bjXdPpUaQBc5M2', 'base64'),
  audience: 'rmbtYmfjYxMuXlzyWr-RGGETvczYadkw'
});

var contacts = [
  {
    id: 1,
    name: 'Kim',
    email: 'kim@email.com',
    image: 'https://en.gravatar.com/userimage/20807150/4c9e5bd34750ec1dcedd71cb40b4a9ba.png'
  },
  {
    id: 2,
    name: 'Gonto',
    email: 'gonto@email.com',
    image: 'https://www.gravatar.com/avatar/df6c864847fba9687d962cb80b482764??s=200'
  },
  {
    id: 3,
    name: 'Ado',
    email: 'ado@email.com',
    image: '//gravatar.com/avatar/99c4080f412ccf46b9b564db7f482907?s=200'
  },
  {
    id: 4,
    name: 'Sebastián',
    email: 'sebastian@email.com',
    image: 'http://en.gravatar.com/userimage/92476393/001c9ddc5ceb9829b6aaf24f5d28502a.png?size=200'
  },
  {
    id: 5,
    name: 'Ryan',
    email: 'ryan@email.com',
    image: '//gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=200'
  }
];

app.get('/api/contacts', (req, res) => {
  const allContacts = contacts.map(contact => {
    return { id: contact.id, name: contact.name}
  });
  res.json(allContacts);
});

app.get('/api/contacts/:id', authCheck, (req, res) => {
  res.json(contacts.filter(contact => contact.id === parseInt(req.params.id))[0]);
});

app.listen(3001);
console.log('Listening on http://localhost:3001');
