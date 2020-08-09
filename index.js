// Normally I prefer import {} from "" but
// for fun I thought I'd use require for this toy project

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(" #### Connnected to db!")
);

// Middleware
app.use(express.json());
// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3001, () => console.log(" #### Server is up and running"));
