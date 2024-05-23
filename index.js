// Index
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Import sequelize and models
const sequelize = require ('./db/database');
const User = require('./models/user');

// Initialize database
async function initializeDatabase() {
  try {
    await sequelize.sync({ alert: true});
    console.log('Database synchronized');
  }
  catch (error) {
    console.error('Error synchronizing database: ', error);
  }
}

initializeDatabase();

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});