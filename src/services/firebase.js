require('dotenv').config();
const admin = require('firebase-admin');

const firstApp = admin.initializeApp(
  {
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS_1),
    databaseURL: 'https://prueba-cloud-functions-6e0c9.firebaseio.com'
  }, 
  'first'
);

const secondApp = admin.initializeApp(
  {
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS_2),
    databaseURL: 'https://burguer-queen-api-client.firebaseio.com'
  }, 
  'second'
);

const thirdApp = admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS_3),
  databaseURL: 'https://foodtrack-6348d-default-rtdb.firebaseio.com'
}, 'third');


module.exports = {
  firstDb: firstApp.firestore(),
  secondDb: secondApp.firestore(),
  thirdDb: thirdApp.firestore(),
}