const express =
require("express");

const router =
express.Router();

const {
  askQuestion
}
=
require("../controllers/chat.controller");

router.post(
  "/",
  askQuestion
);

module.exports =
router;