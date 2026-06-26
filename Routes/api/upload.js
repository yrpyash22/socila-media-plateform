const express = require("express");
const router = express.Router();

const upload = require("../../middleware/upload");
const { uploadImage } = require("../../Controllers/upload/uploadController");

router.post("/", upload.single("image"), uploadImage);

module.exports = router;