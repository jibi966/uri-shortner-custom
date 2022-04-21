const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const uriController = require("./controllers/uri.controller");
const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/", middleware, uriController);

function middleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}

app.listen(process.env.PORT || 5050, async () => {
  try {
    await connect();
    console.log("listening on port 5050");
  } catch (err) {
    console.log(err);
  }
});
