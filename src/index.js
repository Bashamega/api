const express = require('express');
const app = express();
const cors = require('cors');

// Define the object you want to return
const dataObject = require('../public/projects.json')

// Enable CORS
app.use(cors());

// Endpoint to return the object
app.get('/projects', (req, res) => {
  res.json(dataObject);
});

// Handling other routes
app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;