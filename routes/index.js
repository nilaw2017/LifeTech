const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact.ejs");
});

module.exports = router;
