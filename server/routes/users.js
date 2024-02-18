const express = require("express");
const router = express.Router();
 
const { update , deleteUser, getUser, subscribe }  = require("../controllers/user");
const verifyToken = require("../verifyToken");

router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);
router.put("/sub/:id", verifyToken, subscribe);

module.exports = router;