const upload = require("../utils/multer");
const router = require("express").Router();
const PostController = require("../controller/post-controller.js");

router.post("/addpost", upload.single("image"), PostController.addpost);
router.get("/getpost", PostController.getpost);
router.post('/getpostby-id', PostController.getPostById);

module.exports = router;
