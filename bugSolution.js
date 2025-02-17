const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  if (userData === null || userData === undefined) {
    return res.status(500).send('Internal Server Error');
  }
  res.send(userData);
});