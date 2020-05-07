const express = require("express");
const router = express.Router();
const userController = require("../controller/User")
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/register", upload.single("imageUrl"), userController.register);
router.post("/login", userController.authenticated);
router.get("/get", userController.getAllData);
router.get("/get/:usersId", userController.getDataById);
router.delete("/delete/:usersId", userController.deleteById);

module.exports = router;
