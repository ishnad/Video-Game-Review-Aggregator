const express = require('express');
const router = express.Router();
const { db } = require('../firebase'); // Import the Firestore database reference

// GET /api/games
router.get('/', async (req, res) => {
  try {
    const { search, platform, genre, sort } = req.query;

    let gamesRef = db.collection('games'); // Reference to the "games" collection

    // Build the query
    let query = gamesRef;

    if (platform && platform !== 'all') {
      query = query.where('platform', '==', platform);
    }

    if (genre && genre !== 'all') {
      query = query.where('genre', '==', genre);
    }

    // Execute the query
    const snapshot = await query.get();

    let games = [];
    snapshot.forEach(doc => {
      games.push({ id: doc.id, ...doc.data() }); // Add the document ID to the game object
    });

    // Apply search filter in memory (Firestore doesn't have full-text search by default)
    if (search) {
      games = games.filter(game =>
        game.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    if (sort === 'rating') {
      games.sort((a, b) => b.rating - a.rating); // Sort by rating in descending order
    } else if (sort === 'recent') {
      // Assuming you have a 'releaseDate' field
      games.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

module.exports = router;