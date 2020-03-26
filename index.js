const express = require('express');
const server = express();
import db from './dbconfig/dbconfig.js';




const users = [{
    firstName: 'James',
      lastName: 'Carmichael',
      phone: '+234903964271',
      isWhatsapp: 'True',
      email: 'jamescarmichael@gmail.com',
      context: 'Gentleman seeking funds',
      paymentLink: 'https://pleaseaddfunds.me',
      Location: 'Lagos, Nigeria',
      socialMedia: 'https://twitter.com/jamescarmichael',
      industry: 1,
      isVerified: 'True',
  },
  {
    firstName: 'Junaid',
      lastName: 'Vindiesel',
      phone: '+234903964271',
      isWhatsapp: 'True',
      email: 'jamescarmichael@gmail.com',
      context: 'Gentleman seeking funds',
      paymentLink: 'https://pleaseaddfunds.me',
      Location: 'Lagos, Nigeria',
      socialMedia: 'https://twitter.com/jamescarmichael',
      industry: 1,
      isVerified: 'True',
  }];

server.get('/', (req, res) => {
  res.send('This is the good faith API');
});

server.get('/users', (req, res) => {
    res.status(200).json(users)
  });

server.listen(8000, () => console.log('API running in good faith on port 8000'));