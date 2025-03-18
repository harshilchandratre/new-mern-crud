require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const Name = require("./models/Name");
const app = express();

app.use(cors());
app.use(express.json());

const route = require("./routes/nameRoutes");
app.use("/api/name", route);

const MONGO_URI = process.env.MONGO_URI
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
  console.log(`http://localhost:${PORT}/`);
});
