const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const api = require('./api');

const app = express();
const port = 8000;

app.use(cors()); //autorise le CORS
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pixelboard')
	// eslint-disable-next-line no-console
  .then(() => console.log('Connected to MongoDB'))
	// eslint-disable-next-line no-console
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => { // GET SUR localhost:8000/
	res.json('Hello World!');
});

app.use('/api', api);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on ${port}`);
});
