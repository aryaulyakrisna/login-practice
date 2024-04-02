const cors = require("cors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
