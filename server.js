const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');

dotenv.config();
const app = express();


//* ------- database connect
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connected! 😍"))
  .catch((error) => {
    console.log("Database is not connected! ☹️");
    console.log(error);
  });

//* ------- middleware
app.use(express.json());
app.use(cors());

//* ------- routes
const magicspellRouter = require("./routes/magicspell");
app.use("/magic-spell", magicspellRouter);
const wizardRouter = require("./routes/wizard");
app.use("/wizard", wizardRouter);

app.listen(3001, () => console.log("The server wizard is listening... 🧙"));
