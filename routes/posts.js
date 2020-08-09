const router = require("express").Router();
const verify = require("./verifyToken");

// adding verify here means its a middleware
router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "lovely post",
      description: "secret data you can't access unless your logged in",
    },
  });
});

module.exports = router;
