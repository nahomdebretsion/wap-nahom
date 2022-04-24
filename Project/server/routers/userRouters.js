const userController = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.get("/", userController.gets);
router.post("/auth", userController.authUser);

router.post("/addSong", userController.addSongPlayList);
router.post("/removeSong", userController.removeSongPlayList);

module.exports = router;