const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World : Another Simple CRUD server is running");
});

app.listen(port, () => {
  console.log(`Another simple crud server is listening on port ${port}`);
});
