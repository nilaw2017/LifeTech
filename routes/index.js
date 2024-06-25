const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

module.exports = router;
