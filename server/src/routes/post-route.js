const upload = require("../utils/multer");
const router = require("express").Router();
const PostController = require("../controller/post-controller.js");

router.post("/addpost", PostController.addpost);
router.get("/getpost", PostController.getpost);

module.exports = router;
