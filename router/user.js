const router = require("express").Router();
const controller = require("../controllers");

router.post("/add", controller.userCtr.newUser);


module.exports = router;
