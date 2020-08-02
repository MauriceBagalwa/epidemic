/*
? impotation des packages important
*/
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./utils/db");

/*
? mes variables
*/
const app = express();
const port = process.env.PORT;
const routers = require("./router");
/*
? All routers
*/
/*
   ? #1 Home page...
   */
app.use(bodyParser.json());
app.get("", (res, req) => {
  req.send("Hello new wolrd");
});
/*
   ? #2 Home page...
   */
app.use("/api/sinup", routers._user);
/*
? listen server
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
