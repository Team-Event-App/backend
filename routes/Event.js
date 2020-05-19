const express = require("express");
const router = express.Router();
const EventController = require('../controller/Event')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/create",upload.single("imageEvent"),EventController.createData)
router.get ("/show", EventController.getAllData)

module.exports = router;