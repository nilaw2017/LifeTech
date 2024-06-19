const express = require("express")
const app = express();
const path = require("path");
const db = require("./connection");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static("public", { type: "text/css" }));
app.use(express.static(path.join(__dirname, "public")));

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
