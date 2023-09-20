require('dotenv').config();
const admin = require('firebase-admin');

const firstApp = admin.initializeApp(
  {
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS_1),
    databaseURL: process.env.FIREBASE_DATABASE_URL_1
  }, 
  'first'
);

const secondApp = admin.initializeApp(
  {
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS_2),
    databaseURL: process.env.FIREBASE_DATABASE_URL_2
  }, 
  'second'
);

const thirdApp = admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS_3),
  databaseURL: process.env.FIREBASE_DATABASE_URL_3
}, 'third');


module.exports = {
  firstDb: firstApp.firestore(),
  secondDb: secondApp.firestore(),
  thirdDb: thirdApp.firestore(),
}