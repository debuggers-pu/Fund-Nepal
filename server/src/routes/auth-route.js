const upload = require("../utils/multer");
const router = require("express").Router();
const AuthController = require("../controller/auth-controller")


router.post("/login", AuthController.login)
router.post('/signup', 
upload.single("profilepic"),
AuthController.signup)

module.exports = router;