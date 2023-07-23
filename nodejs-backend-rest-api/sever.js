const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Public Toilets Data (replace this with your database or data source)
let publicToilets = [
  { id: 1, name: 'Toilet 1', location: 'Location 1' },
  { id: 2, name: 'Toilet 2', location: 'Location 2' },
];

// Get all public toilets
app.get('/public-toilets', (req, res) => {
  res.json(publicToilets);
});

// Get a specific public toilet by ID
app.get('/public-toilets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const toilet = publicToilets.find((toilet) => toilet.id === id);

  if (toilet) {
    res.json(toilet);
  } else {
    res.status(404).json({ message: 'Public toilet not found' });
  }
});

// Create a new public toilet
app.post('/public-toilets', (req, res) => {
  const { name, location } = req.body;
  const id = publicToilets.length + 1;
  const newToilet = { id, name, location };

  publicToilets.push(newToilet);

  res.status(201).json(newToilet);
});

// Update an existing public toilet
app.put('/public-toilets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, location } = req.body;
  const toilet = publicToilets.find((toilet) => toilet.id === id);

  if (toilet) {
    toilet.name = name;
    toilet.location = location;

    res.json(toilet);
  } else {
    res.status(404).json({ message: 'Public toilet not found' });
  }
});

// Delete a public toilet
app.delete('/public-toilets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = publicToilets.findIndex((toilet) => toilet.id === id);

  if (index !== -1) {
    const deletedToilet = publicToilets.splice(index, 1);
    res.json(deletedToilet[0]);
  } else {
    res.status(404).json({ message: 'Public toilet not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});