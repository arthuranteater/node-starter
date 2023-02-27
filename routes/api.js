const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(" Hi, nodemon 👽 ");
});

module.exports = router;
