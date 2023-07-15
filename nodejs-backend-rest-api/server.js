const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, 2023!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});