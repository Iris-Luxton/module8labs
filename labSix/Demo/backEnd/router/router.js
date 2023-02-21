const express = require("express");
const { passwordCheck } = require("../controllers/userController");
var router = express.Router();


router.post("/login", function(req, res) {
    // console.log(req)
    passwordCheck(req, res);
});

module.exports = router;