const express = require('express');
const bodyParser = require('body-parser');
const {pool} = require('pg');
var cors = require('cors')

require('dotenv').config();


const app = express();
const port = 3004;

//Enable CORS
app.use(cors())

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Create a connection pool
const pool = new pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWARD
});

//Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client',err.stack);
  }
  console.log('Connected to PostgreSQL database');
  client.release();
});
// Public Toilets Data (replace this with your database or data source)
let publicToilets = [
  { id: 1, name: 'Toilet 1', location: 'Location 1' },
  { id: 2, name: 'Toilet 2', location: 'Location 2' },
];

// Get all public toilets
//app.get('/public-toilets', (req, res) => {
//  res.json(publicToilets);
//});

//New getting from DB
app.get('/public-tolets',(req, res) => {
  pool.query('SELECT*FROM "publicToilets"',(err.result) => {
    if(err){
      console.error('Error executing query',err.stack);
      res.status(500).json({ error: 'An error cooured while fetching toilets'});
    } else {
      res.json(result.rows);
    }
  });
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
// app.post('/public-toilets', (req, res) => {
  // const { name, location } = req.body;
  // const id = publicToilets.length + 1;
  // const newToilet = { id, name, location };
// 
  // publicToilets.push(newToilet);
// 
  // res.status(201).json(newToilet);
// });

app.post('/public-toilets',async (req, res) => {
  try{
    const{email,restroomName, address, landmark, gender }= req.body;

    constquery = 'INSERT INTO "publicToilets" (email, restroomName, address, landmark, gender) VALUES ($1, $2, $3, $4, $5) RETURNING*';
    const values = [email, restroomName, address, landmark, gender];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]); 
  }catch(error){
console.error('Error while adding a toilet:', error);
res.status().json({ error: 'Error while adding a toilet'});
  }
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