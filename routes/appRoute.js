const express = require("express");
const upload = require("../services/upload");
const { uploadImage, getImages } = require("../controller/appController");
const router = express.Router();
// /api/images
router.get("/images", getImages);
// /api/login
router.post("/login", upload.single("picture"), uploadImage);
// /api/upload
router.post("/upload", upload.single("picture"), uploadImage);
module.exports = router;
