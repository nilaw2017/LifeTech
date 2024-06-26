const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact.ejs");
});
router.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});
router.get("/services", (req, res) => {
  res.render("pages/services.ejs");
});

module.exports = router;
