const express = require('express');
const cors = require('cors');
const gamesRouter = require('./routes/games'); // Import the games router
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.use('/api/games', gamesRouter); // Mount the games router

app.get('/', (req, res) => {
  res.send('Hello from the GameReview Hub API!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});