const express = require("express");
const { createUserValidator, updateUserValidator } = require("../validators/user.validator");
const { createUser, updateUser } = require("../controllers/user.controllers");
const multerUpload = require("../middlewares/upload.middleware");

const router = express.Router();

router.post("/api/v1/users", createUserValidator, createUser);

router.put("/api/v1/users/:id", multerUpload.single('file'), updateUser);

module.exports = router;
