// Express acts as the middleman to connect the frontend and backend
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("dotenv").config();

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => console.log('successfully connected to database!'));

app.listen(3001, () => console.log("APP CONNECTED TO PORT 3001"))