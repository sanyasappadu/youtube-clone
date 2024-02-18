
const express = require("express");
const { addVideo,  updateVideo, deleteVideo, getVideo, addView, search, getByTag, trend, sub, random} = require("../controllers/video.js");
const verifyToken = require("../verifyToken.js");
const router = express.Router();
 
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:Id", getVideo)
router.put("/view/:Id", addView)
// router.get("/find/:Id", search)
router.get("/trend", trend)
router.get("/sub", verifyToken, sub)//not solved
router.get("/random", random)
router.get("/tags", getByTag)
router.get("/search", search)
 
module.exports = router