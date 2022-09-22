const upload = require("../utils/multer");
const router = require("express").Router();
const PostController = require("../controller/post-controller.js");

router.post("/addpost", upload.single("image"), PostController.addpost);

module.exports = router;
