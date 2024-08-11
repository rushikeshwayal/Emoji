const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

// Allow multiple origins, including your Vercel app and localhost for development
const allowedOrigins = [
    'https://emoji-server-sand.vercel.app/',
    'http://localhost:3001'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

const apiUrl = 'https://emoji-api.com/emojis?access_key=9d62d766c2c04076d191e31cecdac24d355d329b';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    console.log("Response sent on http://localhost:3000");
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
