const express = require("express");
const router = require("./routers/router");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(router);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}!`);
});
