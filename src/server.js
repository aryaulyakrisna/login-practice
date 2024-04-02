const cors = require("cors");
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Routes


// Middlewares
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

