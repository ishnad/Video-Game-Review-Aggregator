const admin = require('firebase-admin');
require('dotenv').config(); // Load environment variables from .env

// Initialize Firebase Admin SDK
const serviceAccount = require('video-game-review-aggregator-firebase-adminsdk-fbsvc-70fa9bd371.json'); // Replace with the path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL // Optional, only if using Realtime Database
});

const db = admin.firestore(); // Get a reference to the Firestore database

module.exports = { admin, db };