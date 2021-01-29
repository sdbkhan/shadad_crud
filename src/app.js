const express = require("express");
const db = require("./db/connection");
const MensRanking = require("./models/mens");
const router = require("./routers/mens");



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
