const express = require("express");
const { sendMessege, getMesseges } = require("../controllers/messgeController");
const router = express.Router();
router.post("/messege", sendMessege);
router.get("/getMessege/:fromId/:toId", getMesseges);

module.exports = router;
