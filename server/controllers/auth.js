const express =require("express");
const { signup } =require("../controllers/auth.js");

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

module.exports = router;