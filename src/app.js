const express = require('express');
const { firstDb, secondDb, thirdDb } = require('./services/firebase');

const app = express();

app.get('/', async (req, res) => {
  const querySnapshot = await firstDb.collection('users').get()  

  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({...doc.data(), id: doc.id});
  });

  // Enviar JSON con los usuarios
  res.json(users);
});

app.get('/second', async (req, res) => {
  const querySnapshot = await secondDb.collection('products').get()  

  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id});
  });

  res.json(products);

})

app.get('/third', async (req, res) => {
  const querySnapshot = await thirdDb.collection('posts').get()  

  const posts = [];
  querySnapshot.forEach((doc) => {
    posts.push({...doc.data(), id: doc.id});
  });

  res.json(posts);
})

exports.app = app;