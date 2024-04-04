const cors = require('cors');
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Routes
const login = require('./routes/login');
const register = require('./routes/register');

// Middlewares
app.use(cors());
app.use(express.json());
// const template = require('./middlewares/sanitation');

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

app.use('/login', login);
app.use('/register', register);
