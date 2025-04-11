const express = require("express");
const { getMessages } = require("../controllers/consumerController");
const router = express.Router();

router.get("/listen", getMessages);

module.exports = router;
