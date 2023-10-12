const express = require("express");
const router = require("./routers/router");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

const ejsLayouts = require("express-ejs-layouts");

app.use(morgan("dev"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(ejsLayouts);
app.use(express.static("public"));

// Config folder layouts
app.set("layout", "layouts/layouts");
app.set("layout extractScripts", true);

// built in Middleware
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
