const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

router.get("/signup", authController.signup_get);

router.get("/login", authController.login_get);

router.post("/signup", authController.signup_post);

router.post("/login", authController.login_post);

router.get('/about', authController.render_about);

router.get("/logout", authController.logout_get);

module.exports = router;
